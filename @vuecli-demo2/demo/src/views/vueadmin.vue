<template>

    <div class="name">
       新的demo
       {{msg}}

       <mt-button type="default">default</mt-button>
        <mt-button @click="show" type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
<!--         <todo/> -->


    <input type="button" value ="get请求" @click="getInfo">
    <input type="button" value="post请求" @click="postInfo">
    <input type="button" value="jsonp请求" @click="jsonpInfo">
  
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
    export default {
        name: 'name',
        data() {
            return {
                msg:"dddddd"
            }
        },
        methods: {
            show(){
                Toast("提示信息")
            },
            getInfo(){
                this.$http.get("http://vue.studyit.io/api/gitlunbo").then(function(result){
                    console.log(result)
                })
            },
            postInfo(){
                this.$http.post("http://vue.studyit.io/api/gitlunbo",{},{emulateJSON:true}).then(result =>{
                    console.log(result)
                })
            },
            jsonpInfo(){
                this.$http.jsonp('http://vue.studyit.io/api/gitlunbo').then(result =>{
                    console.log(result)
                })
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>