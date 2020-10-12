<template>
    <div class="page-sidebar">
        <div class="sidebar custom-scrollbar">
            <div class="sidebar-user text-center">
                <div><img class="img-60 rounded-circle lazyloaded blur-up"
                          src="../../../assets/images/dashboard/man.png" alt="#">
                </div>
                <h6 class="mt-3 f-14">JOHN</h6>
                <p>Ux Designer</p>
            </div>
            <ul class="sidebar-menu">
                <li><router-link class="sidebar-header" to="/admin/"><i data-feather="home"></i><span>Dashboard</span></router-link>
                </li>
                <li>
                    <a class="sidebar-header"><i data-feather="box"></i> <span>Продукты</span><i
                            class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/categories">
                                <i class="fa fa-circle"></i>
                                Категории
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/sub-categories">
                                <i class="fa fa-circle"></i>
                                Под категории
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products/">
                                <i class="fa fa-circle"></i>
                                Лист продуктов
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/add-product/">
                                <i class="fa fa-circle"></i>
                                Добавить продукт
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li><a class="sidebar-header"><i data-feather="filter"></i><span>Фильтры</span><i
                        class="fa fa-angle-right pull-right"></i></a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/filter-groups">
                                <i class="fa fa-circle"></i>
                                Группы фильтров
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/filter-values">
                                <i class="fa fa-circle"></i>
                                Фильтры
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link class="sidebar-header" to="/admin/brands/">
                        <i data-feather="bold"></i>
                        <span>Бренды</span>
                    </router-link>
                </li>
                <li>
                    <a class="sidebar-header">
                        <i data-feather="dollar-sign"></i>
                        <span>Объём продаж</span>
                        <i class="fa fa-angle-right pull-right"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/orders/"><i class="fa fa-circle"></i>Заказы</router-link>
                        </li>
                        <li>
                            <router-link to="/admin/transactions/"><i class="fa fa-circle"></i>Транзакции</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="sidebar-header">
                        <i data-feather="compass"></i>
                        <span>Адреса</span>
                        <i class="fa fa-angle-right pull-right"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/regions/">
                                <i class="fa fa-circle"></i>Регионы
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/cities/">
                                <i class="fa fa-circle"></i>Города
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/addresses/">
                                <i class="fa fa-circle"></i>Адреса
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link class="sidebar-header" to="/admin/media/">
                        <i data-feather="camera"></i>
                        <span>Медиа</span>
                    </router-link>
                </li>
                <li>
                    <a class="sidebar-header">
                        <i data-feather="user-plus"></i>
                        <span>Пользователи</span>
                        <i class="fa fa-angle-right pull-right"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/users/">
                                <i class="fa fa-circle"></i>Список пользователей
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/add-user/">
                                <i class="fa fa-circle"></i>Добавить пользователей
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link class="sidebar-header" to="/admin/reports/">
                        <i data-feather="bar-chart"></i><span>Отчеты</span>
                    </router-link>
                </li>
                <li>
                    <a class="sidebar-header">
                        <i data-feather="settings"></i><span>Настройки</span>
                        <i class="fa fa-angle-right pull-right"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <li>
                            <router-link to="/admin/profile/">
                                <i class="fa fa-circle"></i>Профайл
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li><a class="sidebar-header" @click="logout"><i data-feather="log-out"></i><span>Выйти</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import jQuery from 'jquery'
    import $ from 'jquery'

    export default {
        name: "admin-sidebar",
        data() {
            return {}
        },
        methods: {
            async logout() {
                this.$store.dispatch('auth/logout').then(()=>{
                    this.$router.push('/')
                })
            }
        },
        mounted() {
            $.sidebarMenu = function (menu) {
                var animationSpeed = 300,
                    subMenuSelector = '.sidebar-submenu';
                $(menu).on('click', 'li a', function (e) {
                    var $this = $(this);
                    var checkElement = $this.next();
                    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                        checkElement.slideUp(animationSpeed, function () {
                            checkElement.removeClass('menu-open');
                        });
                        checkElement.parent("li").removeClass("active");
                    } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                        var parent = $this.parents('ul').first();
                        var ul = parent.find('ul:visible').slideUp(animationSpeed);
                        ul.removeClass('menu-open');
                        var parent_li = $this.parent("li");
                        checkElement.slideDown(animationSpeed, function () {
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
            $.toggle_nav_top.click(function () {
                $.this = $(this);
                $.nav = $('.page-sidebar');
                $.nav.toggleClass('open');
            });
            $.body_part_side = $('.body-part');
            $.body_part_side.click(function () {
                $.nav.addClass('open');
            });

            var $window = $(window);
            var widthwindow = $window.width();
            (function ($) {
                "use strict";
                if (widthwindow + 17 <= 991) {
                    $.toggle_nav_top.addClass("open");
                    $.nav.addClass("open");
                }
            })(jQuery);
            $(window).resize(function () {
                var widthwindaw = $window.width();
                if (widthwindaw + 17 <= 991) {
                    $.toggle_nav_top.addClass("open");
                    $.nav.addClass("open");
                } else {
                    $.toggle_nav_top.removeClass("open");
                    $.nav.removeClass("open");
                }
            });

// $(".sidebar-menu>li").removeClass("active");
            $(".sidebar-menu").find("a").removeClass("active");
            $(".sidebar-menu").find("li").removeClass("active");

            var current = window.location.pathname
            $(".sidebar-menu>li a").filter(function () {

                var link = $(this).attr("href");
                if (link) {
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