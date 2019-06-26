<template>
    <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column　prop="title" label="标题" width="140"></el-table-column>
      <el-table-column　prop="body" label="内容" width="140"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        {{scope}}
        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table> 
    </div>
</template>

<script>
    export default {
        data() {
          return {
            tableData:[]
          }
        },
        methods:{
          fetch(){
              this.$http.get('articles').then(res =>{
                this.tableData = res.data
              })
          },
          remove(id){
			  //ex6　的模板字符串
            this.$http.delete(`articles/$(id`).then(res =>{
              this.$message({
                message: "文章删除成功",
                type: "success"
              });

                 this.fetch()
            })
          },
        	edit(id){
				this.$router.push('/articles/${id}/edit')
          }
        },
        created(){
          this.fetch()
        }
    }
</script>

<style lang="scss" scoped>

</style>