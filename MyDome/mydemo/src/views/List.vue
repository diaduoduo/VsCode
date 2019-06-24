<template>
    <div>
        <search-grounp></search-grounp>
        <table-list></table-list>
    </div>
</template>

<script>
import SearchGrounp from "@/components/SearchGrounp.vue";
import tableList from "@/components/table.vue";
    export default {
        components:{
           SearchGrounp,
            tableList
        }
    }
</script>

<style lang="scss" scoped>

</style>