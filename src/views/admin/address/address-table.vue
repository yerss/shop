<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Список адресов</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#addressModal">Добавить</button>
                            <address-form/>
                        </div>
                        <div class="table-responsive">

                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined striped bordered>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a>
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a @click="deleteAddress(row.item.id)">
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
    import AddressForm from "./address-form";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "address-table",
        components: {AddressForm},
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
                        key: "address",
                        label: 'Адрес',
                        sortable: true
                    },
                    {
                        key: "full_name",
                        label: 'ФИО',
                        sortable: true
                    },
                    {
                        key: "telephone_number",
                        label: 'Телефон',
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
        watch:{
            currentPage(val){
                this.getAddress({
                    page: val
                })
            }
        },
        async created() {
            await this.getAddress().finally(()=>{
                this.currentPage = this.pagination.current_page
                this.getCities()
                this.items = this.addresses
                this.isBusy = false
            })
        },
        methods: {
            ...mapActions({
                getAddress: 'addresses/getAddresses',
                getCities: 'cities/getCities',
                deleteAddress: 'addresses/deleteAddress'
            })
        },
        computed: {
            ...mapGetters({
                pagination: 'addresses/pagination',
                addresses: 'addresses/addresses'
            })
        }
    }
</script>

<style scoped>

</style>