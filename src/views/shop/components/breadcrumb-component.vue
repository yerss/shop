<template>
    <div class="breadcrumb-main " v-if="name !== '' || name !== '/' ">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb-contain">
                        <div>
                            <h2>КАТЕГОРИЯ</h2>
                            <ul>
                                <li><a href="javascript:void(0)">ГЛАВНАЯ</a></li>
                                <li><i class="fa fa-angle-double-right"></i></li>
                                <li><a href="javascript:void(0)">{{this.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "breadcrumb-component",
        data () {
          return {
              name: ''
          }
        },
        computed: {

        },
        watch:{
            $route(path) {
                switch (path.name) {
                    case 'news':
                        this.name = 'НОВОСТИ'
                        break
                    case 'categories':
                        this.name = 'КАТЕГОРИИ'
                        break
                    case 'shop_catalog':
                        this.name = 'ПРОДУКТЫ'
                        break
                    case 'about_us':
                        this.name = 'О НАС'
                        break
                    case 'profile':
                        this.name = 'ПРОФАЙЛ'
                        break
                    case 'shop_content':
                        this.name = 'КОНТЕНТ'
                        break
                }
            }
        }
    }
</script>

<style scoped>

</style>