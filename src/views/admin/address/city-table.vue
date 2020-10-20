<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Список городов</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#cityModal">Добавить</button>
                            <city-form/>
                        </div>
                        <div class="table-responsive">

                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a>
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a @click="deleteCity(row.item.id)">
                                        <i class="fa fa-trash crud-button"></i>
                                    </a>
                                </template>
                                <template v-slot:table-busy>
                                    <div class="text-center text-danger my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>
                            </b-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import CityForm from "./city-form";
    export default {
        name: "city-table",
        components: {CityForm},
        data () {
            return {
                isBusy: true,
                items: [],
                fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "region.name",
                        label: 'Регион',
                        sortable: true
                    },
                    {
                        key: "name",
                        label: 'Наименование',
                        sortable: true
                    },
                    {
                        key: "zip_code",
                        label: 'ZIP код',
                        sortable: true
                    },
                    {
                        key: "actions",
                        label: 'Действия',
                        sortable: true
                    },
                ]
            }
        },
        async created() {
            await this.getRegions()
            await this.getCities().finally(() => {
                this.items = this.cities
                this.isBusy = false
            })
        },
        computed: {
            ...mapGetters({
                cities: 'cities/cities'
            })
        },
        methods: {
            ...mapActions({
                getCities: 'cities/getCities',
                getRegions: 'regions/getRegions',
                deleteCity: 'cities/deleteCity'
            })
        }
    }
</script>

<style scoped>

</style>