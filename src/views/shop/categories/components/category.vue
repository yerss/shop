<template>
    <div class="col-lg-3 col-md-6 category">
        <div class="collection-block" style="cursor:pointer; background-color: #e8e8e8" @click="getCategories">
            <div><img :src="category.image" class="img-fluid  bg-img" alt=""></div>
            <div class="collection-content">
                <h3>{{category.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categories",
        props: {
            category: {
                type: Object
            }
        },
        methods: {
            getCategories(){
                if (this.category.categories.length>=1) {
                    this.$store.commit('categories/setCategories', this.category.categories)
                }else {
                    
                }
            }

        }
    }
</script>

<style scoped>

</style>