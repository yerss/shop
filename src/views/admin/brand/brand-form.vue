<template>
    <div class="modal fade" id="brandModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить бренд</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">Наименование:</label>
                                <input class="form-control" id="validationCustom01" type="text" v-model="brand.name">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom03" class="mb-1">Короткое название:</label>
                                <input class="form-control" id="validationCustom03" type="text" v-model="brand.alias">
                            </div>
                            <div class="form-group">
                                <label for="validationCustom04" class="mb-1">Описание:</label>
                                <input class="form-control" id="validationCustom04" type="text" v-model="brand.description">
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Изображение:</label>
                                <b-form-file id="validationCustom02" accept="image/*" v-model="image"></b-form-file>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" @click="addB">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import brand from "../../../store/modules/brand";
    export default {
        name: "brand-form",
        data () {
            return {
                image: null,
                brand: {}
            }
        },
        computed: {
            ...mapGetters({

            })
        },
        methods: {
            ...mapActions({
                addBrand: 'brands/addBrand'
            }),
            addB () {
                let formData = new FormData()
                formData.append('image', this.file)
                for (const [key, value] of Object.entries(this.brand)) {
                    if (typeof value === 'number' || typeof value === 'string') {
                        formData.append(key, value)
                    }
                }
                this.addBrand(formData)
            }
        }
    }
</script>

<style scoped>

</style>