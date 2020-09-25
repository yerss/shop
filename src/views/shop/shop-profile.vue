<template>
  <section class="contact-page register-page section-big-py-space bg-light">
    <div class="custom-container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-3">PERSONAL DETAIL</h3>
          <form class="theme-form">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">First Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter Your name" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="email">Last Name</label>
                  <input type="text" class="form-control" id="last-name" placeholder="Last Name" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="review">Phone number</label>
                  <input type="text" class="form-control" id="review" placeholder="Enter your number" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Email" required="">
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div >
                  <label for="review">Write Your Message</label>
                  <textarea class="form-control mb-0" placeholder="Write Your Message" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <h3 class="mb-3 spc-responsive">SHIPPING ADDRESS</h3>
          <form class="theme-form">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="home-ploat">flat / plot</label>
                  <input type="text" class="form-control" id="home-ploat" placeholder="company name" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="address-two">Address *</label>
                  <input type="text" class="form-control" id="address-two" placeholder="Address" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="zip-code">Zip Code *</label>
                  <input type="text" class="form-control" id="zip-code" placeholder="zip-code" required="">
                </div>
              </div>
              <div class="col-md-6 select_input">
                <div class="form-group">
                  <label >Country *</label>
                  <select class="form-control" size="1">
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                    <option value="U.K">U.K</option>
                    <option value="US">US</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="city">City *</label>
                  <input type="text" class="form-control" id="city" placeholder="City" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="region-state">Region/State *</label>
                  <input type="text" class="form-control" id="region-state" placeholder="Region/state" required="">
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-sm btn-normal mb-lg-5" type="submit">Save setting</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
name: "shop-profile"
}
</script>

<style scoped>

</style>