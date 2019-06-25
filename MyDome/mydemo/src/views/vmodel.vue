<template>
    <div>
        <input type="text" v-model="content">
        <button type="button" @click="dialog_btn">弹个层</button>
        <dia-log :content="content" v-if="show" v-on:listentoEvent="dailogChild"></dia-log>
    </div>
</template>

<script>
import diaLog from "@/components/dialog.vue";
    export default {
/*         Vue.component('dialog',{
            template: '<div class="dialog_cont" v-if="show"><span class="closed" @click="closedBtn">X</span><div>{{content}}</div></div></div>'
        }), */
        data() {
            return {
                content:"sdf",
                show:false
            }
        },
        methods:{
            dialog_btn(){
               // alert("sdf")
               this.show = true 
            },
            dailogChild (data){
                this.show = data;
                console.log(data)
            }
        },
        components:{
            diaLog
        }
    }
</script>

<style lang="scss" scoped>

</style>