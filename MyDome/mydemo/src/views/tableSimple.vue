<template>
  <div>
    <div>
        <el-row :gutter="24">
        <el-col :span="6">
            <div class="grid-content bg-purple">
               <el-input v-model="keywords" placeholder="请输入审批人"></el-input>
            </div>
        </el-col>

        <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-button type="primary"  @click="doFilter(keywords)">搜索</el-button>
            </div>
        </el-col>
        </el-row>
    </div>
    <el-table :data="tableData"   style="width: 100%">
    <el-table-column label="日期">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.pubdate | dateFormat }}</span>
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
    export default {
        data(){
            return{
                tableData:[],
                keywords:''
            }
        },
        created(){
            this.getNewLsit() 
        },
        methods:{
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
            doFilter(keywords){
                if(this.keywords == ""){
                    this.$message.error("查询条件不能为空！");
                    return
                }
                var newlist= [];
                var newList =  this.tableData.filter(tableData =>(tableData.title.includes(keywords)))
                    this.tableData=newList
                        console.log(newList)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>