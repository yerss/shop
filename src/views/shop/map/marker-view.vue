<template>
    <div>
        <p>{{marker_data.id}} - {{marker_data.address}} </p>
        <button id="btn">Click</button>
    </div>
</template>

<script>
    export default {
        name: 'marker-view',
        props: {
            marker_data: {
                type: Object,
                default () {
                    return {}
                },
            }
        },
    }
</script>
