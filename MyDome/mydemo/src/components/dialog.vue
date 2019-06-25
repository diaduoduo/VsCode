<template>
    <div class="dialog_box">
        <h3>弹个层</h3><span class="dialog_btns" @click="dialog_btn">x</span>
        <div class="dialog_content">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        props:['content'],
        methods:{
            dialog_btn(){
                //alert("sdf")
                 this.$emit('listentoEvent',false);
            }
        }
    }
</script>

<style lang="scss" scoped>
.dialog_box{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 50%;
    top:50%;
    background:#ecf5ff;
    border:#aeccda solid 1px;
   transform: translate(-50%, -50%);
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   h3{
       height: 45px;
       line-height: 45px;
       padding:5px 0 0 10px;
       border-bottom:solid 1px #fffcfc;
   }
   .dialog_content{
       height: 100px;
       padding: 10px;
       text-align: center;
       font-size:20px;
       

   }

}
.dialog_btns{
    position: absolute;
    right:10px;
    top:3px;
    font-size: 20px;
    cursor: pointer;
}
</style>