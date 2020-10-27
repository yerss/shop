<template>
    <div class="product-top-filter">
        <div class="row">
            <div class="col-xl-12">
                <div class="filter-main-btn"><span class="filter-btn  "><i class="fa fa-filter" aria-hidden="true"></i> Filter</span></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="product-filter-content">
                    <div class="search-count">
                        <h5>Показаны продукты {{pagination.from}}-{{pagination.to}} из {{pagination.total}}</h5></div>
                    <div class="collection-view">
                        <ul>
                            <li><i class="fa fa-th grid-layout-view"></i></li>
                            <li><i class="fa fa-list-ul list-layout-view"></i></li>
                        </ul>
                    </div>
                    <div class="collection-grid-view">
                        <ul>
                            <li><img src="../../../../assets/images/category/icon/2.png" alt="" class="product-2-layout-view"></li>
                            <li><img src="../../../../assets/images/category/icon/3.png" alt="" class="product-3-layout-view"></li>
                            <li><img src="../../../../assets/images/category/icon/4.png" alt="" class="product-4-layout-view"></li>
                            <li><img src="../../../../assets/images/category/icon/6.png" alt="" class="product-6-layout-view"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "table-header",
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters({
                pagination: 'products/pagination'
            })
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>