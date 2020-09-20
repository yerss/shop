<template>
    <body>
        <section>
        <breadcrumb-component/>
        <section class="section-big-pt-space ratio_asos bg-light">
            <div class="collection-wrapper">
                <div class="custom-container">
                    <div class="row">
                        <div class="col-sm-3 collection-filter category-page-side">
                            <filter-component/>
                            <new-products-component/>
                        </div>
                        <div class="collection-content col">
                            <div class="page-main-content">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <content-component/>
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
    </section>
    </body>
</template>

<script>
import ContentComponent from './catalog-components/content-component'
import TableComponent from './catalog-components/table-component'
import TableHeader from './catalog-components/table-header'
import TableFooter from './catalog-components/table-footer'
import FilterComponent from './catalog-components/filter-component'
import NewProductsComponent from './catalog-components/new-products-component'
import BreadcrumbComponent from "./catalog-components/breadcrumb-component";
export default {
    name: "shop-layout",
    components: {
        BreadcrumbComponent,
        NewProductsComponent, FilterComponent, TableFooter, TableHeader, TableComponent, ContentComponent}
}
</script>

<style scoped>

</style>