<template>
  <div id="app">
    <transition name="fade" mode="out-in" >
        <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
  #app{
    width: 100%;
    overflow: hidden;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
