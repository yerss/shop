<template>
    <div class="modal fade" id="cityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить город</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">Регион:</label>
                                <b-form-select
                                        v-model="city.region_id"
                                        :options="regions"
                                        text-field="name"
                                        value-field="id"
                                />
                            </div>
                            <div class="form-group">
                                <label for="validationCustom02" class="mb-1">Наименование:</label>
                                <input class="form-control" id="validationCustom02" type="text" v-model="city.name">
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom03" class="mb-1">ZIP код:</label>
                                <input class="form-control" id="validationCustom03" type="text" v-model="city.zip_code">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" @click="addCity(city)">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "city-form",
        data () {
            return {
                city: {}
            }
        },
        mounted() {

        },
        computed: {
            ...mapGetters({
                regions: 'regions/regions'
            })
        },
        methods: {
            ...mapActions({
                addCity: 'cities/addCity'
            })
        }
    }
</script>

<style scoped>

</style>