<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Product List</h5>
                    </div>
                    <div class="card-body">
<!--                        <div id="basicScenario" class="product-list digital-product"></div>-->
                        <b-table :fields="fields" :items="items" outlined hover>
                            <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                <a href="javascript:void(0)" @click="edit(row.item)">
                                    <i class="fa fa-edit"></i>
                                </a>
                                /
                                <a href="javascript:void(0)" @click="deleteItem(row.item)">
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
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "product-table",
        data () {
            return {
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
                products: 'products/products'
            })
        },
        methods: {
            ...mapActions({
                getProducts: 'products/getProducts'
            })
        },
    }
</script>

<style scoped>

</style>