<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Группа фильтров</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button type="button"
                                    class="btn btn-secondary"
                                    data-toggle="modal"
                                    data-original-title="test"
                                    data-target="#filterGroupModal"
                                    @click="addFilter"
                            >
                                Добавить
                            </button>
                            <filter-group-form/>
                        </div>
                        <div class="table-responsive">
                            <b-table :fields="fields" :items="items" :busy="isBusy" hover outlined striped bordered>
                                <template v-slot:cell(actions)="row"
                                          style="display: flex; justify-content: space-between; align-content: center">
                                    <a href="javascript:void(0)" @click="editFilter(row.item)">
                                        <i class="fa fa-edit crud-button"></i>
                                    </a>
                                    /
                                    <a href="javascript:void(0)" @click="deleteItem(row.item)">
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
                            <b-pagination
                                    v-model="currentPage"
                                    :total-rows="pagination.total"
                                    :per-page="pagination.per_page"
                                    aria-controls="my-table"
                            ></b-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {mapGetters, mapActions} from 'vuex'
    import FilterGroupForm from "./filter-group-form";

    export default {
        name: "filter-group-table",
        components: {FilterGroupForm},
        data() {
            return {
                currentPage: 1,
                isBusy: true,
                items: [],
                fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "name",
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
        watch: {
            filters(val) {
                this.items = val
            },
            currentPage(val) {
                this.getFilterGroups({
                    page: val
                })
            }
        },
        computed: {
            ...mapGetters({
                filters: 'filters/filterGroups',
                pagination: 'filters/paginationG'
            })
        },
        methods: {
            ...mapActions({
                getFilterGroups: 'filters/getFilterGroups',
                deleteFilterGroup: 'filters/deleteFilterGroup',
                editFilterGroup: 'filters/editFilterGroup',
            }),
            addFilter() {
                this.$store.commit('setEditState', false)
                this.$store.commit('setAddState', true)
            },
            editFilter(item) {
                this.$store.commit('setAddState', false)
                this.$store.commit('setEditState', true)
                this.$store.commit('filters/setFilterGroup', item)
                $('#filterGroupModal').modal('show')
            },
            deleteItem(item) {
                this.deleteFilterGroup(item.id)
            }
        },
        mounted() {
            this.getFilterGroups().finally(() => {
                this.items = this.filters
                this.isBusy = false
            })
        }
    }
</script>

<style scoped>

</style>