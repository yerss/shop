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

                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a href="javascript:void(0)">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    /
                                    <a href="javascript:void(0)">
                                        <i class="fa fa-trash"></i>
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
    import AddressForm from "./address-form";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "address-table",
        components: {AddressForm},
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
                        key: "city",
                        label: 'Город',
                        sortable: true
                    },
                    {
                        key: "zip_code",
                        label: 'ZIP код',
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
        mounted() {
            this.getAddress().finally(()=>{
                this.items = this.addresses
                this.isBusy = false
            })
        },
        methods: {
            ...mapActions({
                getAddress: 'addresses/getAddresses'
            })
        },
        computed: {
            ...mapGetters({
                addresses: 'addresses/addresses'
            })
        }
    }
</script>

<style scoped>

</style>