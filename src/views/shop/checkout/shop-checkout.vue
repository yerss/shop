<template>
    <section class="section-big-py-space bg-light">

        <div class="custom-container">
            <div class="checkout-page contact-page">
                <div class="checkout-form">
                    <form>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12 col-xs-12">
                                <div class="checkout-title">
                                    <h3>Детали заказа</h3></div>
                                <div class="theme-form">
                                    <div class="row check-out ">
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <label>Фамилия</label>
                                            <input type="text" name="field-name" value="" placeholder=""
                                                   v-model="order.surname"
                                            >
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <label>Имя</label>
                                            <input type="text" name="field-name" value="" placeholder=""
                                                   v-model="order.name"
                                            >
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <label class="field-label">Номер телефона</label>
                                            <input type="text" name="field-name" value="" placeholder=""
                                                   v-model="order.phone"
                                            >
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <label class="field-label">Почтовый адрес</label>
                                            <input type="text" name="field-name" value="" placeholder=""
                                                   v-model="order.email"
                                            >
                                        </div>
                                        <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="!user">
                                            <input type="checkbox" name="shipping-option" id="account-option">
                                            <label for="account-option">Создать аккаунт?</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="theme-form" v-if="delivery">
                                    <yandex-map/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12 col-xs-12">
                                <div class="checkout-details theme-form  section-big-mt-space">
                                    <div class="order-box" v-if="products.length>0">
                                        <div class="title-box">
                                            <div>Продукт <span>Итоговая цена</span></div>
                                        </div>
                                        <ul class="qty">
                                            <li v-for="(p, index) in products" :key="index">
                                                {{p.alias}} × {{p.pieces}} <span>$ {{p.price}} </span>
                                            </li>
                                        </ul>
                                        <ul class="sub-total">
                                            <li>Промежуточный итог<span class="count">$ {{total}}</span></li>
                                            <li>Доставка
                                                <div class="shipping">
                                                    <div class="shopping-option">
                                                        <input type="checkbox" name="free-shipping" id="free-shipping"
                                                               @click="delivery=!delivery">
                                                        <label for="free-shipping">Доставка</label>
                                                    </div>
                                                    <div class="shopping-option">
                                                        <input type="checkbox" name="local-pickup" id="local-pickup">
                                                        <label for="local-pickup">Самовызов</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="total">
                                            <li>Итог <span class="count">$ {{total}}</span></li>
                                        </ul>
                                    </div>
                                    <div class="order-box" v-if="products.length<1">
                                        <div class="title-box">
                                            <div>Корзина пуста</div>
                                        </div>
                                    </div>
                                    <div class="payment-box">
                                        <div class="upper-box">
                                            <div class="payment-options">
                                                <ul>
                                                    <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="payment-group" id="payment-1"
                                                                   checked="checked">
                                                            <label for="payment-1">Доверенные платежи<span
                                                                    class="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="payment-group" id="payment-2">
                                                            <label for="payment-2">Оплата при доставке<span
                                                                    class="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="radio-option paypal">
                                                            <input type="radio" name="payment-group" id="payment-3">
                                                            <label for="payment-3">PayPal<span
                                                                    class="image"></span></label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="text-right"><a class="btn-normal btn" @click="doOrder">Оформить заказ</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import YandexMap from "../map/map";

    export default {
        name: "shop-checkout",
        components: {YandexMap},
        data() {
            return {
                delivery: false,
                order: {
                    name: '',
                    surname: '',
                    email: '',
                }
            }
        },
        computed: {
            ...mapGetters({
                products: 'cart/products',
                addressTo: 'addresses/address_to',
                user: 'auth/currentUser'
            }),
            total() {
                return Math.round(this.products.reduce((accumulator, currentValue) => {
                    return accumulator + (currentValue.pieces * currentValue.price)
                }, 0))
            }
        },
        mounted() {
            this.order.email = this.user.email
            this.order.surname = this.user.name.split(' ', 1)
            this.order.name = this.user.name.split(' ', 2)
        },
        methods: {
            ...mapActions({
                addAddress: 'addresses/addAddress',
                addOrder: 'orders/addOrder'
            }),
            doOrder () {
                this.addAddress({
                    address: this.addressTo.name,
                    full_name: `${this.order.surname} ${this.order.name}`,
                    telephone_number: this.order.phone
                }).then((data)=>{
                    this.addOrder({
                        user_id: this.user.id,
                        status: '0',
                        currency_id: 1,
                        address_id: data.id,
                        products: this.products
                    }).then((data) => {
                    // 0: 43.235213211475525
                    // 1: 76.9099650424804
                        // Казахстан, Алматы, улица Манаса, 34А

                    })
                })
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>