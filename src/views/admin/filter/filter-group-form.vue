<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Add Digital Product</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">Category Name :</label>
                                <input class="form-control" id="validationCustom01" type="text">
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Category Image :</label>
                                <input class="form-control" id="validationCustom02" type="file">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button">Save</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "filter-group-form"
    }
</script>

<style scoped>

</style>