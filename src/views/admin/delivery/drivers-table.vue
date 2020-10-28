<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Водители</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#driversModal">Добавить</button>
                            <drivers-form/>
                        </div>
                        <div class="table-responsive">
                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined striped bordered>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a href="javascript:void(0)">
                                        <i class="fa fa-trash crud-button" @click="deleteDriver(row.item.id)"></i>
                                    </a>
                                </template>
                                <template v-slot:table-busy>
                                    <div class="text-center text-danger my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>

                            </b-table>
                            <b-pagination
                                    v-model="currentPage"
                                    :total-rows="pagination.total"
                                    :per-page="pagination.per_page"
                            >
                            </b-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import DriversForm from "./drivers-form";

    export default {
        name: "drivers-table",
        components: {DriversForm},
        data () {
            return {
                currentPage: 1,
                isBusy: true,
                items: [],
                fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "name",
                        label: 'ФИО',
                        sortable: true
                    },
                    {
                        key: "phone_number",
                        label: 'Телефон',
                        sortable: true
                    },
                    {
                        key: "email",
                        label: 'Почта',
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
        computed: {
            ...mapGetters({
                drivers: 'delivery/drivers',
                pagination: 'delivery/pagination'
            })
        },
        methods: {
            ...mapActions({
                getDrivers: 'delivery/getDrivers',
                deleteDriver: 'delivery/deleteDriver'
            })
        },
        watch: {
            drivers (val) {
                this.items = val
            },
            currentPage(val){
                this.getDrivers({
                    page: val
                })
            }
        },
        mounted() {
            this.getDrivers().finally(() => {
                this.items = this.drivers
                this.isBusy = false
            })
        }
    }
</script>

<style scoped>

</style>
