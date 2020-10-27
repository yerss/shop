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
                            <button type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#userModal">Добавить</button>
                            <user-form/>
                        </div>
                        <div class="table-responsive">
                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined striped bordered>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a href="javascript:void(0)" @click="edit(row.item)">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import UserForm from "./user-form";
    import $ from 'jquery'
    export default {
        name: "user-table",
        components: {UserForm},
        data() {
            return {
                items: [],
                isBusy: true,
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
                        key: "email",
                        label: 'Почта',
                        sortable: true
                    },
                    {
                        key: "role.name",
                        label: 'Роль',
                        sortable: true
                    },
                    {
                        key: "actions",
                        label: 'Действия',
                        sortable: true
                    },
                ],

            }
        },
      watch: {
          users (val) {
            this.items = val
          }
      },
        mounted() {
            this.getUsers().finally(() => {
                    this.items = this.users
                    this.isBusy = false
                }
            )
        },
        computed: {
            ...mapGetters({
                users: 'users/users'
            })
        },
        methods: {
            ...mapActions({
                getUsers: 'users/getUsers'
            }),
            edit(user) {
                $('#userModal').modal('show')
            }
        }
    }
</script>

<style scoped>

</style>
