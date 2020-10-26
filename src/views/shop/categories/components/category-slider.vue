<template>
    <div>
        <div class="category-contain">
            <a href="javascript:void(0)">
                <div class="img-wrapper">
                    <img src="../../../../assets/images/layout-1/rounded-cat/1.png" alt="category  " class="img-fluid">
                </div>
                <div>
                    <div class="btn-rounded">
                        {{ category.name }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
      name: "category-slider",
      props: {
        category: {
          type: Object
        }
      }
    }
</script>

<style scoped>

</style>