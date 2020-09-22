<template>
  <section class="cart-section section-big-py-space bg-light">
    <div class="custom-container">
      <div class="row">
        <div class="col-sm-12">
          <table class="table cart-table table-responsive-xs">
            <thead>
            <tr class="table-head">
              <th scope="col">image</th>
              <th scope="col">product name</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">action</th>
              <th scope="col">total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../assets/images/layout-3/product/1.jpg" alt="cart"  class=" "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <div class="qty-box">
                      <div class="input-group">
                        <input type="text" name="quantity" class="form-control input-number" value="1">
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon"><i class="ti-close"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <div class="qty-box">
                  <div class="input-group">
                    <input type="number" name="quantity" class="form-control input-number" value="1">
                  </div>
                </div>
              </td>
              <td><a href="#" class="icon"><i class="ti-close"></i></a></td>
              <td>
                <h2 class="td-color">$4539.00</h2></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../assets/images/layout-3/product/4.jpg" alt="cart" class=" "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <div class="qty-box">
                      <div class="input-group">
                        <input type="number" name="quantity" class="form-control input-number" value="1">
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon"><i class="ti-close"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <div class="qty-box">
                  <div class="input-group">
                    <input type="number" name="quantity" class="form-control input-number" value="1">
                  </div>
                </div>
              </td>
              <td><a href="#" class="icon"><i class="ti-close"></i></a></td>
              <td>
                <h2 class="td-color">$4539.00</h2></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../assets/images/layout-3/product/3.jpg" alt="cart" class=" "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <div class="qty-box">
                      <div class="input-group">
                        <input type="number" name="quantity" class="form-control input-number" value="1">
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon"><i class="ti-close"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <div class="qty-box">
                  <div class="input-group">
                    <input type="number" name="quantity" class="form-control input-number" value="1">
                  </div>
                </div>
              </td>
              <td><a href="#" class="icon"><i class="ti-close"></i></a></td>
              <td>
                <h2 class="td-color">$4539.00</h2></td>
            </tr>
            </tbody>
          </table>
          <table class="table cart-table table-responsive-md">
            <tfoot>
            <tr>
              <td>total price :</td>
              <td>
                <h2>$6935.00</h2></td>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row cart-buttons">
        <div class="col-12">
          <router-link to="/shop" class="btn btn-normal">continue shopping</router-link>
          <router-link to="/checkout" class="btn btn-normal ml-3">check out</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "shop-cart"
}
</script>

<style scoped>

</style>