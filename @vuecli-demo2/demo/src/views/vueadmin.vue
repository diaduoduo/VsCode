<template>

    <div class="name">
       新的demo
       {{msg}}

       <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <todo/>
    </div>
</template>

<script>
    export default {
        name: 'name',
        data() {
            return {
                msg:"dddddd"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>