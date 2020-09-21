<template>
    <div class="collection-filter-block creative-card creative-inner category-side">
        <!-- brand filter start -->
        <div class="collection-mobile-back"><span class="filter-back"><i class="fa fa-angle-left" aria-hidden="true"></i> back</span></div>
        <div class="collection-collapse-block open">
            <h3 class="collapse-block-title mt-0">brand</h3>
            <div class="collection-collapse-block-content">
                <div class="collection-brand-filter">
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="zara">
                        <label class="custom-control-label" for="zara">zara</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="vera-moda">
                        <label class="custom-control-label" for="vera-moda">vera-moda</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="forever-21">
                        <label class="custom-control-label" for="forever-21">forever-21</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="roadster">
                        <label class="custom-control-label" for="roadster">roadster</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="only">
                        <label class="custom-control-label" for="only">only</label>
                    </div>
                </div>
            </div>
        </div>
        <!-- color filter start here -->
        <div class="collection-collapse-block open">
            <h3 class="collapse-block-title">colors</h3>
            <div class="collection-collapse-block-content">
                <div class="color-selector">
                    <ul>
                        <li class="color-1 active"></li>
                        <li class="color-2"></li>
                        <li class="color-3"></li>
                        <li class="color-4"></li>
                        <li class="color-5"></li>
                        <li class="color-6"></li>
                        <li class="color-7"></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- price filter start here -->
        <div class="collection-collapse-block border-0 open">
            <h3 class="collapse-block-title">price</h3>
            <div class="collection-collapse-block-content">
                <div class="collection-brand-filter">
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="hundred">
                        <label class="custom-control-label" for="hundred">$10 - $100</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="twohundred">
                        <label class="custom-control-label" for="twohundred">$100 - $200</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="threehundred">
                        <label class="custom-control-label" for="threehundred">$200 - $300</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="fourhundred">
                        <label class="custom-control-label" for="fourhundred">$300 - $400</label>
                    </div>
                    <div class="custom-control custom-checkbox collection-filter-checkbox">
                        <input type="checkbox" class="custom-control-input" id="fourhundredabove">
                        <label class="custom-control-label" for="fourhundredabove">$400 above</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import slick from "../../../assets/js/slick"

export default {
    name: "filter-component",
  mounted() {
    $('.slide-1 ').slick({
      autoplay: false,
      autoplaySpeed: 2500,
    });
    $('.collapse-block-title').on('click', function(e) {
      e.preventDefault;
      var speed = 300;
      var thisItem = $(this).parent(),
          nextLevel = $(this).next('.collection-collapse-block-content');
      if (thisItem.hasClass('open')){
        thisItem.removeClass('open');
        nextLevel.slideUp(speed);
      }
      else {
        thisItem.addClass('open');
        nextLevel.slideDown(speed);
      }
    });
    $('.color-selector ul li').on('click', function(e) {
      $(".color-selector ul li").removeClass("active");
      $(this).addClass("active");
    });
  }
}
</script>

<style scoped>

</style>