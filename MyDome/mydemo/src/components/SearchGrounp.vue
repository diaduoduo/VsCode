<template>
    <div>
        {{title}}dfgdfg
        <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
               <el-input v-model="ExaminerApprover" placeholder="请输入审批人"></el-input>
            </div>
        </el-col>

        <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-button type="primary" v-model="keywords" @click="search_btn">搜索</el-button>
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
                keywords:''
            }
        },
        methods:{
            search_btn(){
                alert("sdf");
                console.log(this.data)
            }
        },
        props:{
            "title":String,
            data:{
                type:Array,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>