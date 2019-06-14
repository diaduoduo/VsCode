<template>

    <div class="name">
       新的demo
       {{msg}}

       <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
<!--         <todo/> -->


           <input type="button" value ="get请求" @click="getInfo">
    <input type="button" value="post请求" @click="postInfo">
    <input type="button" value="jsonp请求" @click="jsonpInfo">
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
        methods: {
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