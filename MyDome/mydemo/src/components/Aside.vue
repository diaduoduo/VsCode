<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu>
        <router-link to="/table" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>table</span>
        </router-link>
        <router-link to="/vmodel" tag="el-menu-item">
          <i class="el-icon-setting"></i>
          <span>v-model</span>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="scss">
    .el-menu {
        .el-menu-item{
           text-align: left;
           padding-left: 20px; 
        }
    }
</style>
<script>
export default {};
</script>