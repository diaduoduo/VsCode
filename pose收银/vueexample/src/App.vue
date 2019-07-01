<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
  <leftNav></leftNav>
  <div class="main">
     <router-view/>
  </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>

#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  width: 95%;
  float:left;
  background:#eff2f7;
  height: 100%;


}
</style>
