<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Список фильтров</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#filterValueModal">
                                Добавить
                            </button>
                            <filter-value-form/>
                        </div>
                        <div class="table-responsive">
                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a href="javascript:void(0)">
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a href="javascript:void(0)">
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
    import {mapGetters, mapActions} from 'vuex'
    import FilterValueForm from "./filter-value-form";
    export default {
        name: "filter-value-table",
        components: {FilterValueForm},
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
                        key: "filter_group_id",
                        label: 'Группа',
                        sortable: true
                    },
                    {
                        key: "value",
                        label: 'Наименование',
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
            this.getFilterValues().finally(()=>{
                this.items = this.filterValues
                this.isBusy = false
            })
        },
        computed: {
            ...mapGetters({
                filterValues: 'filters/filterValues'
            })
        },
        methods: {
            ...mapActions({
                getFilterValues: 'filters/getFilterValues'
            })
        }
    }
</script>

<style scoped>

</style>