<template>
  <div class="page-wrapper">
    <admin-header/>
    <div class="page-body-wrapper">
      <i class="fa fa-circle"></i>
      <admin-sidebar/>
      <div class="page-body">
        <admin-breadcrumb/>
        <router-view/>
      </div>
      <admin-footer/>
    </div>
    </div>
</template>

<script>
const feather = require('../../assets/js/icons/feather-icon/feather.min')
import jQuery from 'jquery'
import $ from 'jquery'
import AdminHeader from "./components/admin-header"
import AdminSidebar from "./components/admin-sidebar"
import AdminFooter from "./components/admin-footer"
import AdminBreadcrumb from './components/admin-breadcrumb'
export default {
  name: "main-layout",
  components: {AdminFooter, AdminSidebar, AdminHeader, AdminBreadcrumb},
  mounted() {
    feather.replace();
    (function($) {
      "use strict";
      $(".mobile-toggle").click(function(){
        $(".nav-menus").toggleClass("open");
      });
      $(".mobile-search").click(function(){
        $(".form-control-plaintext").toggleClass("open");
      });
      $(".form-control-plaintext").keyup(function(e){
        if(e.target.value) {
          $("body").addClass("offcanvas");
        } else {
          $("body").removeClass("offcanvas");
        }
      });
    })(jQuery);

    $('.loader-wrapper').fadeOut('slow', function() {
      $(this).remove();
    });

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
      } else {
        $('.tap-top').fadeOut();
      }
    });
    $('.tap-top').click( function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });


    (function($, window, document, undefined) {
      "use strict";
      var $ripple = $(".js-ripple");
      $ripple.on("click.ui.ripple", function(e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find(".c-ripple__circle");
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
          top: y + "px",
          left: x + "px"
        });
        $this.addClass("is-active");
      });
      $ripple.on(
              "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
              function(e) {
                $(this).removeClass("is-active");
              });
    })(jQuery, window, document);

    $(".chat-menu-icons .toogle-bar").click(function(){
      $(".chat-menu").toggleClass("show");
    });


    /*=====================
     05. Image to background js
     ==========================*/
    $(".bg-img" ).parent().addClass('bg-size');

    jQuery('.bg-img').each(function() {

      var el = $(this),
              src = el.attr('src'),
              parent = el.parent();

      parent.css({
        'background-image': 'url(' + src + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'display' : 'block'
      });

      el.hide();
    });

  }
}
</script>

<style>
  @import "../../assets/css/themify.css";
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/admin.css";
</style>