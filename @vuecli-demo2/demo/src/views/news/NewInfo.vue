<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻标题{{id}}</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params.id //将url地址中传递过来的　ＩＤ值　，挂载到data上　方便以后调用
            }
        },
        methods:{
            getNewsInfo
        }   
    }
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size:.14rem;
        text-align: center;
        margin:15px 0
    }
    .subtitle{
        font-size:1.33rem;
        display: flex;
        justify-content: space-between
    }
}
</style>