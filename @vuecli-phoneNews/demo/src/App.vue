<template>
  <div id="app" class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="实例程序员"></mt-header>
    <!-- 中间 路由 view -->

        <transition>
        <router-view/>
        </transition>
        
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/homei">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact">

        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/set">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>

    <!-- 

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vueadmin">Vueadmin</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<style>
.app-container {
  padding-top: 40px;
    padding-bottom: 40px;
  overflow-x: hidden
}
.v-enter{
opacity: 0;
transform:translateX(100%)
}
.v-leave-to{
  opacity: 0;
transform:translateX(-100%);
position: absolute
}
.v-enter-active,.v-leave-active{
  transition:all .5s ease
}
</style>
