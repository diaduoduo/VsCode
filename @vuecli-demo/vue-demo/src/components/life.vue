<template>
    <div>
加载的组件
{{title}}
    </div>
</template>

<script>
    export default {
            data(){
                return{
                    msg:"sdf"
                }
            },
            methods:{

            },
            /* props:['title'] */
            props:{
                "title":String
            }
    }
</script>

<style lang="scss" scoped>

</style>