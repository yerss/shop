<template>
    <section class="section-big-pt-space ratio_asos bg-light">
        <div class="collection-wrapper">
            <div class="custom-container">
                <div class="row">
                    <div class="col-sm-3 collection-filter category-page-side">
                        <filter-component/>
                    </div>
                    <div class="collection-content col">
                        <div class="page-main-content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="collection-product-wrapper">
                                        <table-header/>
                                        <table-component/>
                                        <table-footer/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import TableComponent from './components/table-component'
    import TableHeader from './components/table-header'
    import TableFooter from './components/table-footer'
    import FilterComponent from './components/filter-component'
    import NewProductsComponent from './components/new-products-component'
    import $ from 'jquery'

    export default {
        name: "shop-layout",
        components: {
            NewProductsComponent,
            FilterComponent,
            TableFooter,
            TableHeader,
            TableComponent
        },
        data () {
            return {

            }
        },
        mounted() {
            $('.filter-main-btn').on('click', function(e) {
                $('.collection-filter').css("left","-15px");
            });
            $('.filter-back').on('click', function(e) {
                $('.collection-filter').css("left","-365px");
                $('.sidebar-popup').trigger('click');
            });
        },
        computed: {
            ...mapGetters({

            })
        },
        methods: {
            ...mapActions({

            })
        }

    }
</script>

<style scoped>

</style>