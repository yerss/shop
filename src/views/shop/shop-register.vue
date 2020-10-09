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
                  <input type="text" class="form-control" id="fname" placeholder="First Name" required="">
                </div>
                <div class="col-md-12 form-group">
                  <label for="review">Last Name</label>
                  <input type="text" class="form-control" id="lname" placeholder="Last Name" required="">
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 form-group">
                  <label for="email">email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" required="">
                </div>
                <div class="col-md-12 form-group">
                  <label for="review">Password</label>
                  <input type="password" class="form-control" id="review" placeholder="Enter your password" required="">
                </div>
                <div class="col-md-12 form-group"><a href="#" class="btn btn-normal">create Account</a></div>
              </div>
              <div class="form-row">
                <div class="col-md-12 ">
                  <p >Have you already account?
                    <router-link to="/login" class="txt-default">click </router-link>here to
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
export default {
  name: "shop-register"
}
</script>

<style scoped>

</style>