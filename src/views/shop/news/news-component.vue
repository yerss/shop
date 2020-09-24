<template>
    <section>
        <section class="blog-detail-page section-big-py-space ratio2_3">
            <div class="container">
                <div class="row section-big-pb-space">
                    <news/>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import News from "@/views/shop/news/components/news";
export default {
    name: "news-component",
  components: {News},
  methods: {
        active() {
        }
    }
}
</script>

<style scoped>

</style>