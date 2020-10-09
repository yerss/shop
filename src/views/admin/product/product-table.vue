<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Product List</h5>
                    </div>
                    <div class="card-body">
<!--                        <div id="basicScenario" class="product-list digital-product"></div>-->
                        <b-table :fields="fields">

                        </b-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "product-table",
        data () {
            return {
                fields: ['ID', 'Наименование', 'Короткое имя', 'Статус', 'Цена', 'Действия']
            }
        },
        computed: {

        },
        methods: {
            ...mapActions({
            })
        },
        created() {

        }
    }
</script>

<style scoped>

</style>