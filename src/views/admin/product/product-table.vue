<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Product List</h5>
                    </div>
                    <div class="card-body">
                        <b-table :fields="fields" :items="items" outlined hover striped bordered>
                            <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                <a href="javascript:void(0)">
                                    <i class="fa fa-edit crud-button"></i>
                                </a>
                                /
                                <a href="javascript:void(0)" @click="deleteProduct(row.item.id)">
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
                                aria-controls="my-table"
                        ></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "product-table",
        data () {
            return {
                currentPage: 1,
                items: [],
                fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "name",
                        label: 'Наименование',
                        sortable: true
                    },
                    {
                        key: "alias",
                        label: 'Короткое имя',
                        sortable: true
                    },
                    {
                        key: "status",
                        label: 'Статус',
                        sortable: true
                    },
                    {
                        key: "price",
                        label: 'Цена',
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
            this.getProducts().finally(() => {
                this.items = this.products
                this.isBusy = false
            })
        },
        computed: {
            ...mapGetters({
                pagination: 'products/pagination',
                products: 'products/products'
            })
        },
        methods: {
            ...mapActions({
                getProducts: 'products/getProducts',
                deleteProduct: 'products/deleteProduct'
            })
        },
        watch:{
            products (val) {
                this.items = val
            },
            currentPage(val){
                this.getProducts({
                    page: val
                })
            }
        }
    }
</script>

<style scoped>

</style>