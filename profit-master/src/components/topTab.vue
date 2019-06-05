<template>
    <div id="topTab">
        <img src="../assets/img/icon_back_yao@2x.png" alt="" @click="back" class="back">
        {{title}}
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "topTab",
        props:{
            title:{
                type:String,
                default:""
            }
        },
        methods:{
            back:function () {
                this.$router.go(-1);
                this.$emit("back");
            }
        }
    }
</script>

<style scoped>
    #topTab{
        position: fixed;
        top:0;
        left: 0;
        height:0.88rem;
        line-height: 0.88rem;
        background:rgba(255,255,255,1);
        font-size:0.32rem;
        font-family:PingFang-SC-Light;
        font-weight:bold;
        color:rgba(51,51,51,1);
        text-align: center;
        width: 100%;
        z-index: 10;
    }
    .back{
        position: absolute;
        left: 0.2rem;
        top: 0.26rem;
        width: 0.36rem;
        height: 0.36rem;
    }
</style>
