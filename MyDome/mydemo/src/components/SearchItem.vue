<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input v-model="keywords" placeholder="请输入审批人"></el-input>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary" v-model="keywords" @click="search(keywords)">搜索</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    search(keywords) {
      if (this.keywords == "") {
        this.$message.error("查询条件不能为空！");
        return;
      }
      var newList = [];
      var newList = this.tableData.filter(tableData =>
        tableData.title.includes(keywords)
      );

      console.log(newList);
      //this.tableData=newList
      console.log(this.$emit(this.tableData, newList));
    }
  },
  props: ["list", "tableData", "data"]
};
</script>

<style lang="scss" scoped>
</style>