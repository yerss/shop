<template>
    <section class="collection section-big-py-space ratio_square bg-light">
        <div class="container">
            <div class="row partition-collection section-big-pt-space">
                <category v-for="(c, index) in items" :key="index" :category="c"/>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Category from './components/category'
    export default {
        name: "shop-categories",
        components: {
            Category
        },
        data () {
            return {
                items: []
            }
        },
        watch: {
            categories (val) {
                this.items = val
            }
        },
        computed: {
            ...mapGetters({
                categories: 'categories/categories'
            })
        },
        methods: {
            ...mapActions({
                getCategories: 'categories/getCategories'
            })
        },
        async created () {
            await this.getCategories()
        }
    }
</script>

<style scoped>
.category {
    margin-bottom: 10px;
}
</style>