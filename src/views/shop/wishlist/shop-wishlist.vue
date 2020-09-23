<template>
  <section class="wishlist-section section-big-py-space bg-light">
    <div class="custom-container">
      <div class="row">
        <div class="col-sm-12">
          <table class="table cart-table table-responsive-xs">
            <thead>
            <tr class="table-head">
              <th scope="col">image</th>
              <th scope="col">product name</th>
              <th scope="col">price</th>
              <th scope="col">availability</th>
              <th scope="col">action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../../assets/images/layout-2/product/1.jpg" alt="product" class="img-fluid  "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <p>in stock</p>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <p>in stock</p>
              </td>
              <td><a href="#" class="icon mr-3"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../../assets/images/layout-2/product/2.jpg" alt="product" class="img-fluid  "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <p>in stock</p>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <p>in stock</p>
              </td>
              <td><a href="#" class="icon mr-3"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>
                <a href="#"><img src="../../../assets/images/layout-1/product/3.jpg" alt="product" class="img-fluid  "></a>
              </td>
              <td><a href="#">cotton shirt</a>
                <div class="mobile-cart-content row">
                  <div class="col-xs-3">
                    <p>in stock</p>
                  </div>
                  <div class="col-xs-3">
                    <h2 class="td-color">$63.00</h2></div>
                  <div class="col-xs-3">
                    <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2></div>
                </div>
              </td>
              <td>
                <h2>$63.00</h2></td>
              <td>
                <p>in stock</p>
              </td>
              <td><a href="#" class="icon mr-3"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row wishlist-buttons">
        <div class="col-12">
          <router-link to="/shop" class="btn btn-normal">continue shopping</router-link>
          <router-link to="/checkout" class="btn btn-normal">check out</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "shop-wishlist"
}
</script>

<style scoped>

</style>