<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <div>
      <button @click="goBack" type="button">后退</button>
      <button @click="goGo"  type="button">前进</button>
      <button @click="goHome"  type="button"> 返回首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/jspang website is very">params</router-link>|
    <router-link to="/gotohome">Gotohome</router-link>
    <router-link to="/Hi11">Hi11</router-link>
    <router-link to="/jspang">jspang</router-link>
    <router-link to="/111">我是瞎写的</router-link>


    <transition name="fade" mode="out-in">
      <router-view>

      </router-view>
    </transition>


    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">hi页面</router-link>
      <router-link :to="{name:'Hi1',params:{username:'jspang',id:'888'}}">hi页面1</router-link>
      <router-link to="/hi/hi2">hi页面3</router-link>
      <!-- <a href=""></a> router-link制作导航-->
    </div>
    <p>
      {{$route.name}}
    </p>
    <router-view></router-view>
    <router-view name="left" style="float:left;width: 50%; height: 300px; background:red;"></router-view>
    <router-view name="right" style="float:left;width: 50%; height: 300px; background:pink;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
/*     goBack:function(){

    }===goBack(){

    } */
    goBack(){
      this.$router.go(-1)
    },
    goGo(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')

       //this.$router.push('/hi1')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s
}
</style>
