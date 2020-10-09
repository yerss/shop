<template>
    <section class="login-page section-big-py-space bg-light">
        <div class="custom-container">
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-8 offset-xl-4 offset-lg-3 offset-md-2">
                    <div class="theme-card">
                        <h3 class="text-center">Login</h3>
                        <form class="theme-form">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="Email"
                                       v-model="email" required="">
                            </div>
                            <div class="form-group">
                                <label for="review">Password</label>
                                <input type="password" class="form-control" id="review"
                                       placeholder="Enter your password" v-model="password" required="">
                            </div>
                            <a @click.prevent="login" class="btn btn-normal">Login</a>
                            <router-link to="/forgot_password" class="float-right txt-default mt-2">Forgot your password?</router-link>
                        </form>
                        <p class="mt-3">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                        <router-link to="/register" class="txt-default pt-3 d-block">Create an Account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "shop-login",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login () {
                let email = this.email
                let password = this.password
                this.$store
                    .dispatch('auth/login', {
                        email,
                        password
                    })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>