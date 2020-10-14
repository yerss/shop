<template>
    <div class="modal fade" id="filterGroupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="addState" class="modal-title f-w-600">Добавить группу фильтров</h5>
                    <h5 v-if="editState" class="modal-title f-w-600">Изменить группу фильтров</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group mb-0">
                                <label for="validationCustom01" class="mb-1">Наименование:</label>
                                <input class="form-control" id="validationCustom01" type="text" v-model="filter.name">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button v-if="addState"
                            class="btn btn-primary"
                            type="button"
                            @click="addFilterGroup"
                    >Сохранить</button>
                    <button v-if="editState"
                            class="btn btn-primary"
                            type="button"
                            @click="editFilterGroup"
                    >Изменить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "filter-group-form",
        data () {
            return {
                filter: {}
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions({
                addFilter: 'filters/addFilterGroup',
                editFilter: 'filters/editFilterGroup'
            }),
            addFilterGroup(){
                this.addFilter(this.filter).finally(()=>{
                    $('#filterGroupModal').modal('toggle')
                })
            },
            editFilterGroup(){
                this.editFilter(this.filter).finally(()=>{
                    $('#filterGroupModal').modal('toggle')
                })
            }
        },
        watch: {
            filterGroup(val){
                this.filter = Object.assign({}, val)
            }
        },
        computed: {
            ...mapGetters({
                addState: 'addState',
                editState: 'editState',
                filterGroup: 'filters/filterGroup'
            }),
        }
    }
</script>

<style scoped>

</style>