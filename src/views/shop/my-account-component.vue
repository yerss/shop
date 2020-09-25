<template>
    <div id="myAccount" class="add_to_cart right account-bar">
        <a href="javascript:void(0)" class="overlay" @click="closeAccount()"></a>
        <div class="cart-inner">
            <div class="cart_top">
                <h3>my account</h3>
                <div class="close-cart">
                    <a href="javascript:void(0)" @click="closeAccount()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <form class="theme-form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Email" required="">
                </div>
                <div class="form-group">
                    <label for="review">Password</label>
                    <input type="password" class="form-control" id="review" placeholder="Enter your password" required="">
                </div>
                <div class="form-group">
                    <a href="#" class="btn btn-rounded btn-block ">Login</a>
                </div>
                <div>
                    <h5 class="forget-class">
                      <router-link to="/forget_password" class="d-block">forget password?</router-link>
                    </h5>
                    <h6 class="forget-class">
                      <router-link to="/register" class="d-block">new to store? Signup now</router-link>
                    </h6>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-account-component",
        methods: {
            closeAccount() {
                document.getElementById("myAccount").classList.remove('open-side');
            },
        }
    }
</script>

<style scoped>

</style>