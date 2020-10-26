<template>
    <div class="product-pagination">
        <div class="theme-paggination-block">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <nav aria-label="Page navigation">
                        <b-pagination
                                v-model="currentPage"
                                :total-rows="pagination.total"
                                :per-page="pagination.per_page"
                                aria-controls="my-table"
                        ></b-pagination>
                    </nav>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <div class="product-search-count-bottom">
                        <h5>Показаны продукты {{pagination.from}}-{{pagination.to}} из {{pagination.total}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "table-footer",
        data () {
            return {
                currentPage: 1
            }
        },
        methods: {
            ...mapActions({
                getProducts: 'products/getProducts'
            })
        },
        watch:{
            currentPage(val){
                this.getProducts({
                    page: val
                })
            }
        },
        computed: {
            ...mapGetters({
                pagination: 'products/pagination'
            })
        }
    }
</script>

<style scoped>

</style>