<template>
  <div>
    <div>
      <SearchGrounp :msg="msg" :data="tableData" :list="lists" :tableData="tableData"></SearchGrounp>
    </div>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column label="日期">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="审批人">
      <template slot-scope="scope">
        <p>{{ scope.row.name }}</p>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table> 
  </div>
</template>

<script>
import SearchGrounp from "@/components/SearchGrounp.vue";
export default {
  data() {
    return {
      msg:"duoduo",
      lists : {name:'父组件文字',age:26},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components:{
    SearchGrounp
  }
};
</script>