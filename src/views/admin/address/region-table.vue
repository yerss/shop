<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Список регионов</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-popup pull-right">
                            <button @click.prevent="add" type="button" class="btn btn-secondary" data-toggle="modal" data-original-title="test" data-target="#regionModal">Добавить</button>
                            <region-form/>
                        </div>
                        <div class="table-responsive">

                            <b-table :fields="fields"  :items="items" :busy="isBusy" hover outlined striped bordered>
                                <template v-slot:cell(actions)="row" style="display: flex; justify-content: space-between; align-content: center">
                                    <a >
                                        <i class="fa fa-edit crud-button" ></i>
                                    </a>
                                    /
                                    <a @click="deleteRegion(row.item.id)">
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
    import RegionForm from "./region-form";
    export default {
        name: "region-table",
        components: {RegionForm},
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
        computed: {
            ...mapGetters({
                regions: 'regions/regions'
            })
        },
        methods: {
            ...mapActions({
                getRegions: 'regions/getRegions',
                deleteRegion: 'regions/deleteRegion'
            }),
            edit(item){

            },
        },
        mounted() {
            this.getRegions().finally(() => {
                this.items = this.regions
                this.isBusy = false
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style scoped>

</style>