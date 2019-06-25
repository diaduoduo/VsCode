<template>
  <div>
    <div>
      <SearchGrounp :msg="msg" :data="tableData" :list="lists" :tableData="tableData" v-on:listentoEvent="tableDataChild"></SearchGrounp>
    </div>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column label="日期">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.pubdate }}</span>
      </template>
    </el-table-column>
    <el-table-column label="审批人">
      <template slot-scope="scope">
        <p>{{ scope.row.title }}</p>
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
      tableData: []
    };
  },
  components:{
    SearchGrounp
  },
  created() {
    this.getNewLsit();
  },
    methods: {
    getNewLsit() {
      this.axios
        .get("http://api.komavideo.com/news/list")
        .then(response => {
          console.log(response.data);
          this.tableData = response.data;
            this.$message({
              message: '加载成功',
              type: 'success'
            });
        })
        .catch(function() {
          this.$message.error('加载失败');
        });
    },
    tableDataChild(data){
       this.tableData = data

    }
  }
};
</script>