<template>
    <section class="login-page pwd-page section-big-py-space bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="theme-card">
                        <h3>Забыли пароль</h3>
                        <form class="theme-form">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="email"
                                               placeholder="Введите почту" required="" v-model="email">
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="btn btn-normal" @click="forget">ОТправить</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "shop-forget-password",
        data() {
            return {
                email: ''
            }
        },
        computed: {
            ...mapGetters({})
        },
        methods: {
            ...mapActions({
                forgetPassword: 'auth/forgetPassword'
            }),
            forget() {
                this.forgetPassword({
                    email: this.email
                })
            }
        }
    }
</script>

<style scoped>

</style>