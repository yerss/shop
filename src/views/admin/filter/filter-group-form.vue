<template>
    <div class="modal fade" id="filterGroupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Добавить группу фильтров</h5>
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
                    <button class="btn btn-primary" type="button" @click="addFilterGroup(filter)">Сохранить</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "filter-group-form",
        data () {
            return {
                filter: {}
            }
        },
        created() {

        },
        methods: {
            ...mapActions({
                addFilterGroup: 'filters/addFilterGroup'
            })
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>