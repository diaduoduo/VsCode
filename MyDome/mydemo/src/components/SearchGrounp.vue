<template>
    <div>
        <strong>{{list.name}}</strong>
        <ul>
            <li v-for="(item, index) in tableData" :key="item.index" @click="listbtns(index)">
               {{index}} {{item.address}}
            </li>
        </ul>
<!--        // <div>{{msg}}</div> -->
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
        data(){
            return{
                ExaminerApprover:'',
                keywords:'',
                poped:'',
                index:0,
                uerslist:[
                    {name:"ddd1"},
                    {name:"ddd1"},
                    {name:"ddd1"},
                ]
            }
        },
        methods:{
            search(keywords){
                var newList = []
                var newList =  this.tableData.filter(tableData =>(tableData.title.includes(keywords)))
                       // console.log(newList)
                    //this.tableData=newList
                   // this.$emit('listentoEvent',newList)
                        //console.log(this.$emit('listentoEvent',newList))

                        this.$emit('listentoEvent',newList);

            },
/*             poped(){
          console.log(this.tableData.name)
            }, */
            listbtns(index){
                console.log(this.list.name)
               console.log(this.tableData[index].name)
                
      
            }
        },
        props:["list","tableData","data"]

    }
</script>

<style lang="scss" scoped>

</style>