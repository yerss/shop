<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Список брендов</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#brandModal">Добавить</button>
                            <brand-form/>
                        </div>
                        <div class="table-responsive">

                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a>
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a @click="deleteBrand(row.item.id)">
                                        <i class="fa fa-trash crud-button"></i>
                                    </a>
                                </template>
                                <template v-slot:table-busy>
                                    <div class="text-center text-danger my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>
                            </b-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import BrandForm from "./brand-form";
    export default {
        name: "brand-table",
        components: {BrandForm},
        data () {
            return {
                isBusy: true,
                items: [],
                fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "image",
                        label: 'Изоброжение',
                        sortable: true
                    },
                    {
                        key: "name",
                        label: 'Наименование',
                        sortable: true
                    },
                    {
                        key: "alias",
                        label: 'Короткое имя',
                        sortable: true
                    },
                    {
                        key: "description",
                        label: 'Описание',
                        sortable: true
                    },
                    {
                        key: "actions",
                        label: 'Действия',
                        sortable: true
                    },
                ]
            }
        },
        mounted() {
            this.getBrands().finally(() => {
                this.items = this.brands
                this.isBusy = false
            })
        },
        computed: {
            ...mapGetters({
                brands: 'brands/brands'
            })
        },
        methods: {
            ...mapActions({
                getBrands: 'brands/getBrands',
                deleteBrand: 'brands/deleteBrand'
            })
        }

    }
</script>

<style scoped>

</style>