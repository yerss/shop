<template>
    <table class="table cart-table table-responsive-xs">
        <thead>
        <tr class="table-head">
            <th scope="col"></th>
            <th scope="col">Наименование</th>
            <th scope="col">Цена</th>
            <th scope="col">Действие</th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="(p, index) in products"
                :key="index"
        >
            <td>
                <a href="#"><img :src="p.image" alt="product" class="img-fluid"></a>
            </td>
            <td><a href="#">{{p.alias}}</a>
                <div class="mobile-cart-content row">
                    <div class="col-xs-3">
                        <h2 class="td-color">${{p.price}}</h2></div>
                    <div class="col-xs-3">
                        <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i> </a>
                          <a href="#" class="cart">
                            <i class="ti-shopping-cart"></i>
                          </a>
                        </h2>
                    </div>
                </div>
            </td>
            <td>
                <h2>${{p.price}}</h2></td>
            <td>
                <a href="#" class="icon mr-3" @click="deleteItem(p.id)"><i class="ti-close"></i> </a>
                <a href="#" class="cart" @click="addToCart(p)"><i class="ti-shopping-cart"></i> </a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "table-list",
        props: {
            products: {
                type: Array
            }
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addProduct',
                deleteItem: 'wishlist/deleteProduct'
            }),
        }
    }
</script>

<style scoped>

</style>