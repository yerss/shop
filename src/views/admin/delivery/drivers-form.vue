<template>
    <div class="modal fade" id="driversModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
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
                                <label for="validationCustom04" class="mb-1">ФИО:</label>
                                <input class="form-control"
                                       id="validationCustom04"
                                       type="text"
                                       v-model="driver.name"
                                >
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom05" class="mb-1">Телефон:</label>
                                <input class="form-control"
                                       id="validationCustom05"
                                       type="text"
                                       v-model="driver.phone_number"
                                >
                            </div>
                            <div class="form-group">
                                <label for="validationCustom02" class="mb-1">Почта:</label>
                                <input class="form-control"
                                       id="validationCustom02"
                                       type="text"
                                       v-model="driver.email"
                                >
                            </div>
                            <div class="form-group">
                                <label for="validationCustom03" class="mb-1">Пароль:</label>
                                <input class="form-control"
                                       id="validationCustom03"
                                       type="password"
                                       v-model="driver.password"
                                >
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" @click="add(driver)">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import $ from "jquery";
    export default {
        name: "drivers-form",
        data () {
            return {
                driver: {
                    name: '',
                    email: '',
                    phone_number: '',
                    password: ''
                }
            }
        },
        computed: {
        },
        methods: {
            ...mapActions({
                addDriver: 'delivery/addDrivers'
            }),
            add(driver){
                this.addDriver(driver)
                $('#driversModal').modal('toggle')
            }
        }
    }
</script>

<style scoped>

</style>