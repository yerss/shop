<template>
    <section class="cart-section order-history section-big-py-space">
        <div class="custom-container">
            <div class="row">
                <div class="col-sm-12">
                    <b-table :items="items" :fields="fields" responsive="sm" hover outlined bordered striped>
                                <template #cell(show_details)="row">
                                    <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
                                        Детали
                                    </b-form-checkbox>
                                </template>

                                <template #row-details="row">
                                    <b-card>
                                        <b-table :fields="detail_fields" :items="row.item.products" bordered outlined hover small>
                                        </b-table>
                                    </b-card>
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
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "order-history",
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
                        key: "address.address",
                        label: 'Адрес доставки',
                        sortable: true
                    },
                    {
                        key: "status",
                        label: 'Статус заказа',
                        sortable: true
                    },
                    // {
                    //     key: "actions",
                    //     label: 'Действия',
                    //     sortable: true
                    // },
                    {
                        key: 'show_details',
                        label: ''
                    }
                ],
                detail_fields: [
                    {
                        key: "id",
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: "alias",
                        label: 'Наименование',
                        sortable: true
                    },
                    {
                        key: "pivot.pieces",
                        label: 'Количество',
                        sortable: true
                    },
                    {
                        key: "pivot.price",
                        label: 'Цена',
                        sortable: true
                    },
                ]
            }
        },
        computed: {
            ...mapGetters({
                orders: 'users/orders'
            })
        },
        methods: {
            ...mapActions({
                getUserOrders: 'users/getUserOrders'
            })
        },
        mounted () {
            this.getUserOrders().finally(() => {
                this.items = this.orders
                this.isBusy = false
            })
        }
    }
</script>

<style scoped>

</style>