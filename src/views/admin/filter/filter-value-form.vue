<template>
    <div class="modal fade" id="filterValueModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить фильтр</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form class="needs-validation">
                        <div class="form">
                            <div class="form-group">
                                <label for="validationCustom01" class="mb-1">Группа фильтра:</label>
                                <b-select id="validationCustom01"
                                          :options="filterGroups"
                                          value-field="id"
                                          text-field="name"
                                          v-model="filter.filter_group_id"
                                />
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Наименование:</label>
                                <input class="form-control"
                                       id="validationCustom02"
                                       type="text"
                                       v-model="filter.value"
                                >
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" @click="addFilterValue(filter)">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "filter-value-form",
        data () {
            return {
                filter: {}
            }
        },
        computed: {
            ...mapGetters({
                filterGroups: 'filters/filterGroups'
            })
        },
        methods: {
            ...mapActions({
                addFilterValue: 'filters/addFilterValue'
            })
        }
    }
</script>

<style scoped>

</style>