<template>
    <div class="product-pagination">
        <div class="theme-paggination-block">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true"><i class="fa fa-chevron-left" aria-hidden="true"></i></span> <span class="sr-only">Previous</span></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true"><i class="fa fa-chevron-right" aria-hidden="true"></i></span> <span class="sr-only">Next</span></a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <div class="product-search-count-bottom">
                        <h5>Showing Products 1-24 of 10 Result</h5></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table-footer"
    }
</script>

<style scoped>

</style>