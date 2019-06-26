<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu>
        <router-link to="/tableSimple" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>table</span>
        </router-link>
        <!--         <router-link to="/List" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>table组件+搜索组件</span>
        </router-link>-->

        <router-link to="/table" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>table页面+搜索组件</span>
        </router-link>
        <router-link to="/vmodel" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>v-model</span>
        </router-link>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo" router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item index="/article/create">新建文章</el-menu-item>
          <el-menu-item index="/article/list">文章列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="scss">
.el-menu {
  .el-menu-item {
    text-align: left;
    padding-left: 20px;
  }
}
</style>
<script>
export default {};
</script>