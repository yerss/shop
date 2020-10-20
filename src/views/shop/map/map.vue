<template>
    <div>
        <div class="row check-out ">
            <div class="form-group col-md-12 col-sm-12 col-xs-12">
                <label>Адрес</label>
                <input type="text" name="field-name" value="" placeholder="" v-model="marker.to.address">
            </div>
        </div>
        <div class="form">
            <div class="map__container position-relative">
                <yandex-map
                        :settings="settings"
                        :coords="coords.to"
                        :zoom="15"
                        @click="onClick($event, 'to')"
                >
                    <ymap-marker
                            ref="marker"
                            @click="onClick"
                            :coords="coords.to"
                            marker-id="123"
                            hint-content="some hint"
                    >
                    </ymap-marker>
                </yandex-map>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapState} from "vuex";
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'
    import MarkerView from './marker-view'

    export default {
        name: 'map',
        components: {yandexMap, ymapMarker, MarkerView},
        data() {
            return {
                marker: {
                    from: {},
                    to: {}
                },
                markerTo: {},
                coords: {
                    from: [
                        43.238949,
                        76.889709
                    ],
                    to: [
                        43.238949,
                        76.889709
                    ],
                },
                settings: {
                    apiKey: 'bdcf0ff4-8db8-4484-90d0-abb250ef6fad',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                cargo: {
                    shipment_date_from: '',
                    shipment_date_to: '',
                    description: '',
                    extra_info: '',
                    volume: '',
                    weight: '',
                    price: '',
                    from_city_id: '',
                    to_city_id: '',
                    transport_id: '1',
                    transport: '',
                    is_cargo: true
                }
            }
        },
        computed: {
        },
        methods: {
            parseDateToFormat(date) {
                return `${date.getFullYear()}-${
                    date.getMonth() + 1}-${
                    date.getDate()} ${
                    date.getHours()}:${
                    date.getMinutes()}:${
                    date.getSeconds()}`;
            },
            selectItem(city, id) {
                this.cargo[id] = city.id
            },
            onClick(e, key) {
                this.coords[key] = e ? e.get('coords') : this.coords[key]
                ymaps.geocode(this.coords[key], {kind: 'house', spn: '0.005,0.005'}).then((res) => {
                    this.$set(this.marker[key], 'address', res.geoObjects.get(0).properties['_data'].text)
                    this.$store.commit('addresses/setAddressTo', {
                        name: this.marker.to.address,
                        to: this.coords.to
                    })
                }).catch(() => {
                    console.log('Error')
                });

            },
        },
        mounted() {
            this.$store.dispatch('getTransportTypes')
            this.onClick(null, 'from')
            this.onClick(null, 'to')
        }
    }
</script>

<style scoped>
    .multiselect__tags {
        border: 1px solid #ccc !important;
        border-radius: 4px !important;
    }

    .content {
        min-height: calc(100vh - 82px);
    }

    .ymap-container {
        height: 100%;
    }

    .map__container {
        width: 100%;
        height: 500px;
    }

    .address__field {
        position: absolute;
        bottom: 20px;
        width: 400px;
        height: 100px;
    }

    .form {
        background: #e8e3e340 !important;
        border-radius: 8px;
        margin-top: 20px;
    }
</style>