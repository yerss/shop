<template>
    <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить группу фильтров</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">ФИО:</label>
                                <input class="form-control" id="validationCustom01" type="text">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom02" class="mb-1">Почта:</label>
                                <input class="form-control" id="validationCustom02" type="text">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom03" class="mb-1">Пароль:</label>
                                <input class="form-control" id="validationCustom03" type="text">
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom04" class="mb-1">Роль:</label>
                                <b-select :options="roles"/>
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
    export default {
        name: "user-form",
        data (){
            return {
                roles: [
                    {
                        value: 'admin',
                        text: 'Админ'
                    },
                    {
                        value: 'user',
                        text: 'Покупатель'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>