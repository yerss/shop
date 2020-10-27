<template>
    <section class="login-page section-big-py-space bg-light">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="theme-card">
                        <h3 class="text-center">Create account</h3>
                        <form class="theme-form">
                            <div class="form-row">
                                <div class="col-md-12 form-group">
                                    <label for="email">First Name</label>
                                    <input type="text" class="form-control" id="fname" placeholder="First Name"
                                           required="" v-model="surname">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="review">Last Name</label>
                                    <input type="text" class="form-control" id="lname" placeholder="Last Name"
                                           required="" v-model="name">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12 form-group">
                                    <label for="email">email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Email"
                                           required="" v-model="email">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="review">Password</label>
                                    <input type="password" class="form-control" id="review"
                                           placeholder="Enter your password" required="" v-model="password">
                                </div>
                                <div class="col-md-12 form-group">
                                  <a href="javascript:void(0)" class="btn btn-normal" @click="registration">
                                    create Account
                                  </a>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12 ">
                                    <p>Have you already account?
                                        <router-link to="/login" class="txt-default">click</router-link>
                                        here to
                                        <router-link to="/login" class="txt-default">Login</router-link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "shop-register",
        data() {
            return {
                name: '',
                surname: '',
                password: '',
                email: ''
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            registration() {
                this.register({
                    name: this.name + ' ' + this.surname,
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style scoped>

</style>