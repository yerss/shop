<template>
    <section class="section-big-py-space bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="account-sidebar"><a class="popup-btn">my account</a></div>
                    <div class="dashboard-left">
                        <div class="collection-mobile-back"><span class="filter-back">
                            <i class="fa fa-angle-left" aria-hidden="true"></i> back</span>
                        </div>

                        <div class="block-content ">
                            <ul>
                                <li class="active"><a href="#">Аккаунт</a></li>
                                <li v-if="role === 'admin'">
                                    <router-link tag="a" to="/admin">Панель админа</router-link>
                                </li>
                                <li>
                                    <router-link to="/my-orders">Мои заказы</router-link>
                                </li>
                                <li>
                                    <router-link to="/wishlist">Мои избранные</router-link>
                                </li>
                                <li>
                                    <router-link to="/reset-password">Сбросить пароль</router-link>
                                </li>
                                <li class="last pointer"><a @click="logout">Выйти</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="dashboard-right">
                        <div class="dashboard">
                            <div class="page-title">
                                <h2>Панель</h2></div>
                            <div class="welcome-msg">
                                <p>Привет, {{user.name}} !</p>
                                <p>На панели управления «Моя учетная запись» у вас есть возможность просмотреть
                                    моментальный снимок вашей недавней активности в
                                    учетной записи и обновить информацию о ней. Щелкните ссылку ниже,
                                    чтобы просмотреть или изменить информацию .
                                </p>
                            </div>
                            <div class="box-account box-info">
                                <div class="box-head">
                                    <h2>Информация об учетной записи</h2></div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="box">
                                            <div class="box-title">
                                                <h3>Контакты</h3>
                                                <!--                                                <a href="#">Edit</a>-->
                                            </div>
                                            <div class="box-content">
                                                <h6>{{user.name}}</h6>
                                                <h6>{{user.email}}</h6>
                                                <h6>
                                                    <router-link to="/reset-password">Сбросить пароль</router-link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
<!--                                <div>-->
<!--                                    <div class="box">-->
<!--                                        <div class="box-title">-->
<!--                                            <h3>Address Book</h3><a href="#">Manage Addresses</a></div>-->
<!--                                        <div class="row">-->
<!--                                            <div class="col-sm-6">-->
<!--                                                <h6>Default Billing Address</h6>-->
<!--                                                <address>You have not set a default billing address.<br><a href="#">Edit-->
<!--                                                    Address</a></address>-->
<!--                                            </div>-->
<!--                                            <div class="col-sm-6">-->
<!--                                                <h6>Default Shipping Address</h6>-->
<!--                                                <address>You have not set a default shipping address.<br><a href="#">Edit-->
<!--                                                    Address</a></address>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from 'jquery'
    import {mapGetters} from 'vuex'

    export default {
        name: "shop-profile",
        methods: {
          async logout() {
              this.$store.dispatch('auth/logout').then(()=>{
                  this.$store.commit('auth/setCurrentUser', {})
                  this.$router.push('/')
              })
          }
        },
        computed: {
            ...mapGetters({
                role: 'auth/role',
                user: 'auth/currentUser'
            })
        },
        mounted() {
            $('.account-sidebar').on('click', function (e) {
                $('.dashboard-left').css("left", "0");
            });
            $('.filter-back').on('click', function (e) {
                $('.dashboard-left').css("left", "-365px");
            });
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>