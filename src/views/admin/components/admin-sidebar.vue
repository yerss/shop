<template>
    <div class="page-sidebar">
        <div class="sidebar custom-scrollbar">
            <div class="sidebar-user text-center">
                <div><img class="img-60 rounded-circle lazyloaded blur-up" src="../../../assets/images/dashboard/man.png" alt="#">
                </div>
                <h6 class="mt-3 f-14">JOHN</h6>
                <p>Ux Designer</p>
            </div>
            <ul class="sidebar-menu">
                <li><a class="sidebar-header" href="index.html"><i data-feather="home"></i><span>Dashboard</span></a></li>
                <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Products</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/categories">
                                <i class="fa fa-circle"></i>
                                Category
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/sub-categories">
                                <i class="fa fa-circle"></i>
                                Sub Category
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products/" tag="a">
                                <i class="fa fa-circle"></i>Product List
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/add-product/" tag="a">
                                <i class="fa fa-circle"></i>Add Product
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href=""><i data-feather="dollar-sign"></i><span>Sales</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="order.html"><i class="fa fa-circle"></i>Orders</a></li>
                        <li><a href="transactions.html"><i class="fa fa-circle"></i>Transactions</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href=""><i data-feather="tag"></i><span>Coupons</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="coupon-list.html"><i class="fa fa-circle"></i>List Coupons</a></li>
                        <li><a href="coupon-create.html"><i class="fa fa-circle"></i>Create Coupons </a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href="#"><i data-feather="clipboard"></i><span>Pages</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="pages-list.html"><i class="fa fa-circle"></i>List Page</a></li>
                        <li><a href="page-create.html"><i class="fa fa-circle"></i>Create Page</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href="media.html"><i data-feather="camera"></i><span>Media</span></a></li>
                <li><a class="sidebar-header" href="#"><i data-feather="align-left"></i><span>Menus</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="menu-list.html"><i class="fa fa-circle"></i>Menu Lists</a></li>
                        <li><a href="create-menu.html"><i class="fa fa-circle"></i>Create Menu</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href=""><i data-feather="user-plus"></i><span>Users</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="user-list.html"><i class="fa fa-circle"></i>User List</a></li>
                        <li><a href="create-user.html"><i class="fa fa-circle"></i>Create User</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href=""><i data-feather="users"></i><span>Vendors</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="list-vendor.html"><i class="fa fa-circle"></i>Vendor List</a></li>
                        <li><a href="create-vendors.html"><i class="fa fa-circle"></i>Create Vendor</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href=""><i data-feather="chrome"></i><span>Localization</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="translations.html"><i class="fa fa-circle"></i>Translations</a></li>
                        <li><a href="currency-rates.html"><i class="fa fa-circle"></i>Currency Rates</a></li>
                        <li><a href="taxes.html"><i class="fa fa-circle"></i>Taxes</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href="reports.html"><i data-feather="bar-chart"></i><span>Reports</span></a></li>
                <li><a class="sidebar-header" href=""><i data-feather="settings" ></i><span>Settings</span><i class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li><a href="profile.html"><i class="fa fa-circle"></i>Profile</a></li>
                    </ul>
                </li>
                <li><a class="sidebar-header" href="invoice.html"><i data-feather="archive"></i><span>Invoice</span></a>
                </li>
                <li><a class="sidebar-header" href="login.html"><i data-feather="log-in"></i><span>Login</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import jQuery  from 'jquery'
    import $ from 'jquery'
    export default {
        name: "admin-sidebar",
        data () {
            return {

            }
        },
        mounted() {
            $.sidebarMenu = function(menu) {
                var animationSpeed = 300,
                    subMenuSelector = '.sidebar-submenu';
                $(menu).on('click', 'li a', function(e) {
                    var $this = $(this);
                    var checkElement = $this.next();
                    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                        checkElement.slideUp(animationSpeed, function() {
                            checkElement.removeClass('menu-open');
                        });
                        checkElement.parent("li").removeClass("active");
                    }
                    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                        var parent = $this.parents('ul').first();
                        var ul = parent.find('ul:visible').slideUp(animationSpeed);
                        ul.removeClass('menu-open');
                        var parent_li = $this.parent("li");
                        checkElement.slideDown(animationSpeed, function() {
                            checkElement.addClass('menu-open');
                            parent.find('li.active').removeClass('active');
                            parent_li.addClass('active');
                        });
                    }
                    if (checkElement.is(subMenuSelector)) {
                        e.preventDefault();
                    }
                });
            }
            $.sidebarMenu($('.sidebar-menu'))
            $.nav = $('.page-sidebar');
            $.toggle_nav_top = $('#sidebar-toggle');
            $.toggle_nav_top.click(function() {
                $.this = $(this);
                $.nav = $('.page-sidebar');
                $.nav.toggleClass('open');
            });
            $.body_part_side = $('.body-part');
            $.body_part_side.click(function(){
                $.nav.addClass('open');
            });

            var $window = $(window);
            var widthwindow = $window.width();
            (function($) {
                "use strict";
                if(widthwindow+17 <= 991) {
                    $.toggle_nav_top.addClass("open");
                    $.nav.addClass("open");
                }
            })(jQuery);
            $( window ).resize(function() {
                var widthwindaw = $window.width();
                if(widthwindaw+17 <= 991){
                    $.toggle_nav_top.addClass("open");
                    $.nav.addClass("open");
                }else{
                    $.toggle_nav_top.removeClass("open");
                    $.nav.removeClass("open");
                }
            });

// $(".sidebar-menu>li").removeClass("active");
            $( ".sidebar-menu" ).find( "a" ).removeClass("active");
            $( ".sidebar-menu" ).find( "li" ).removeClass("active");

            var current = window.location.pathname
            $(".sidebar-menu>li a").filter(function() {

                var link = $(this).attr("href");
                if(link){
                    if (current.indexOf(link) != -1) {
                        $(this).parents('li').addClass('active');
                        $(this).addClass('active');
                        console.log(link + " found");
                    }
                }
            });

        }
    }
</script>

<style>
</style>