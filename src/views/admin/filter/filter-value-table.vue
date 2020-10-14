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
                            <button type="button"
                                    class="btn btn-secondary"
                                    data-toggle="modal"
                                    data-original-title="test"
                                    data-target="#filterValueModal"
                                    @click="addFilter"
                            >
                                Добавить
                            </button>
                            <filter-value-form/>
                        </div>
                        <div class="table-responsive">
                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a @click="editFilter(row.item)">
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a @click="deleteItem(row.item)">
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
    import $ from "jquery";
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
                        key: "filter_group.name",
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
        async created() {
            await this.getFilterGroups()
            await this.getFilterValues().finally(()=>{
                this.items = this.filters
                this.isBusy = false
            })
        },
        computed: {
            ...mapGetters({
                filters: 'filters/filterValues'
            })
        },
        methods: {
            ...mapActions({
                getFilterValues: 'filters/getFilterValues',
                getFilterGroups: 'filters/getFilterGroups',
                deleteFilterValue: 'filters/deleteFilterValue'
            }),
            addFilter() {
                this.$store.commit('setEditState', false)
                this.$store.commit('setAddState', true)
            },
            editFilter(item){
                this.$store.commit('setAddState', false)
                this.$store.commit('setEditState', true)
                this.$store.commit('filters/setFilterValue', item)
                $('#filterValueModal').modal('show')
            },
            deleteItem (item) {
                this.deleteFilterValue(item.id)
            }
        },
        watch: {
            filters(val){
                this.items = val
            }
        }
    }
</script>

<style scoped>

</style>