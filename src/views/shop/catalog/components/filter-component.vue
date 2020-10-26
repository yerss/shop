<template>
    <div class="collection-filter-block creative-card creative-inner category-side">
        <!-- brand filter start -->
        <div class="collection-mobile-back"><span class="filter-back"><i class="fa fa-angle-left"
                                                                         aria-hidden="true"></i> back</span></div>
        <div class="collection-collapse-block open" v-for="(filter, index) in filters">
            <h3 :class="['collapse-block-title', {'mt-0' : index === 0}  ]" style="border: 0px" v-b-toggle="`collapse-${index}`">{{filter.name}}</h3>
            <b-collapse :id="`collapse-${index}`">
                <div class="collection-collapse-block-content">
                    <div class="collection-brand-filter">
                        <div class="custom-control custom-checkbox collection-filter-checkbox" v-for="value in filter.filter_values">
                            <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    v-model="selectedValues"
                                    :id="value.id"
                                    :value="value.id"
                            >
                            <label class="custom-control-label" :for="value.id">{{value.value}}</label>
                        </div>
                    </div>
                </div>
            </b-collapse>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    import slick from "../../../../assets/js/slick"
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "filter-component",
        data () {
            return {
                selectedValues: []
            }
        },
        watch:{
            selectedValues (val) {
                this.getProducts({
                    filter_values: val.join(',')
                })
            }
        },
        mounted() {
            this.getFilters()
            $('.slide-1 ').slick({
                autoplay: false,
                autoplaySpeed: 2500,
            });
            $('.collapse-block-title').on('click', function (e) {
                e.preventDefault;
                var speed = 300;
                var thisItem = $(this).parent(),
                    nextLevel = $(this).next('.collection-collapse-block-content');
                if (thisItem.hasClass('open')) {
                    thisItem.removeClass('open');
                    nextLevel.slideUp(speed);
                } else {
                    thisItem.addClass('open');
                    nextLevel.slideDown(speed);
                }
            });
        },
        computed: {
            ...mapGetters({
                filters: 'filters/filterGroups'
            })
        },
        methods: {
            ...mapActions({
                getFilters: 'filters/getFilterGroups',
                getProducts: 'products/getProducts'
            })
        }
    }
</script>

<style scoped>

</style>