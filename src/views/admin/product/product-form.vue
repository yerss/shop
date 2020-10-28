<template>
    <div class="container-fluid">
        <div class="row product-adding">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5>General</h5>
                    </div>
                    <div class="card-body">
                        <div class="digital-add needs-validation">
                            <div class="form-group">
                                <label for="validationCustom01" class="col-form-label pt-0"><span>*</span> Наименование</label>
                                <input class="form-control"
                                       id="validationCustom01"
                                       type="text"
                                       required=""
                                       v-model="product.name"
                                >
                            </div>
                            <div class="form-group">
                                <label for="validationCustomtitle" class="col-form-label pt-0"><span>*</span> Короткое наименование</label>
                                <input class="form-control"
                                       id="validationCustomtitle"
                                       type="text"
                                       required=""
                                       v-model="product.alias"
                                >
                            </div>
                            <div class="form-group">
                                <label class="col-form-label"><span>*</span> Категория</label>
                                <b-form-select :options="categories"
                                               text-field="name"
                                               value-field="id"
                                               v-model="product.category_id"
                                />
                            </div>
                            <div class="form-group">
                                <label class="col-form-label"><span>*</span> Бренд</label>
                                <b-form-select
                                        :options="brands"
                                        text-field="name"
                                        value-field="id"
                                        v-model="product.brand_id"
                                />
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Краткое описание</label>
                                <textarea rows="5" cols="12" v-model="product.content"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="validationCustom02" class="col-form-label"><span>*</span>Цена</label>
                                <input
                                        class="form-control"
                                        id="validationCustom02"
                                        type="number"
                                        required=""
                                        v-model="product.price"
                                >
                            </div>
                            <div class="form-group">
                                <label class="col-form-label"><span>*</span> Статус</label>
                                <div class="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                    <label class="d-block" for="edo-ani">
                                        <input class="radio_animated" id="edo-ani" type="checkbox" name="rdo-ani" v-model="status">
                                        Есть в наличии
                                    </label>
                                </div>
                            </div>
                            <label class="col-form-label pt-0">Главное изображение</label>
                            <vue-dropzone
                                    id="dropzone1"
                                    @vdropzone-file-added="fileAdded"
                                    :options="dropzone1Options"
                            ></vue-dropzone>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Полное описание</h5>
                    </div>
                    <div class="card-body">
                        <div class="digital-add needs-validation">
                            <div class="form-group mb-0">
                                <div class="description-sm">
                                    <textarea id="editor1"
                                              name="editor1"
                                              cols="10" rows="3"
                                              v-model="product.description"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>Дополнительные изображение</h5>
                    </div>
                    <div class="card-body">
                        <div class="digital-add needs-validation">
                            <div class="form-group">
                                <vue-dropzone
                                        id="dropzone2"
                                        @vdropzone-file-added="filesAdded"
                                        :options="dropzone2Options"
                                ></vue-dropzone>
                            </div>
                            <div class="form-group mb-0">
                                <div class="product-buttons text-center">
                                    <button type="button" class="btn btn-primary" @click="add">Add</button>
                                    <button type="button" class="btn btn-light">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "product-form",
        components: {
            vueDropzone: vue2Dropzone,
        },
        data() {
            return {
                product: {},
                dropzone1Options: {
                    maxFiles: "1",
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    resizeWidth: 768,
                    resizeHeight: 988,
                    maxFilesize: 0.5,
                    headers: { "My-Awesome-Header": "header value" },
                    dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Загрузить",
                    params: this.image
                },
                dropzone2Options: {
                    maxFiles: "4",
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    resizeWidth: 768,
                    resizeHeight: 988,
                    maxFilesize: 0.5,
                    headers: { "My-Awesome-Header": "header value" },
                    dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Загрузить",
                    params: this.image
                },
                image: null,
                images: [],
                status: null
            }
        },
        async created () {
            await this.getBrands()
            await this.getCategories()
        },
        methods: {
            ...mapActions({
                getBrands: 'brands/getBrands',
                getCategories: 'categories/getCategories',
                addProduct: 'products/addProduct'
            }),
            add() {
                this.product.weight = 1
                this.product.volume = 1
                this.product.pieces_left = 1
                this.product.status = this.status ? '1' : '0'
                let formData = new FormData()
                formData.append('image', this.image)
                formData.append('images', this.images)
                for (const [key, value] of Object.entries(this.product)) {
                    formData.append(key, value)
                }
                this.addProduct(formData)
                this.product = {}

            },
            fileAdded(file) {
                this.image = file
            },
            filesAdded(file) {
                this.images.push(file)
            }
        },
        computed: {
            ...mapGetters({
                brands: 'brands/brands',
                categories: 'categories/categories'
            })
        }
    }
</script>

<style scoped>
/deep/ .dz-preview.dz-processing.dz-image-preview {
    z-index: 1;
}
</style>