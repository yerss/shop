<template>
    <div class="modal fade" id="addressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить адрес</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">Город:</label>
                                <b-select id="validationCustom02"/>
                            </div>
                            <div class="form-group">
                                <label for="validationCustom02" class="mb-1">ZIP код:</label>
                                <input class="form-control" id="validationCustom02" type="text">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom03" class="mb-1">Адрес:</label>
                                <input class="form-control" id="validationCustom03" type="text">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom04" class="mb-1">ФИО:</label>
                                <input class="form-control" id="validationCustom04" type="text">
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom05" class="mb-1">Телефон:</label>
                                <input class="form-control" id="validationCustom05" type="text">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "address-form",

    }
</script>

<style scoped>

</style>