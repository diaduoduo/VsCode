<template>
    <div>
        <search-grounp :searchMsg="searchMsg"></search-grounp>
        <table-list :tableMsg="tableMsg"></table-list>
    </div>
</template>

<script>
import SearchGrounp from "@/components/SearchItem.vue";
import TableList from "@/components/tableItem.vue";
    export default {
        data(){
            return {
                searchMsg:'',
                tableMsg:''
            }
        },
        components:{
            SearchGrounp,
            TableList
        }
    }
</script>

<style lang="scss" scoped>

</style>