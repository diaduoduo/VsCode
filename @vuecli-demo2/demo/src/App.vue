<template>
  <div id="app" class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="实例程序员"></mt-header>
    <h1>123</h1>
    <!-- 中间 路由 view -->
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
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
}
</style>
