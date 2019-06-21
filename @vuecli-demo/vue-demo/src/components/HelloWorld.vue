<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <p>{{msg2}}</p>
    <button @click="setMsg">改了之后</button>
    <HelloWorld ref="header"  :title="title" v-if="flag"></HelloWorld>
    <button @click="flag = !flag">点击销毁</button>
    <button @click="getpose">点击跳转</button>

  </div>
</template>

<script>
import HelloWorld from '@/components/life.vue'; // @ is an alias to /src
/* import { Component, Prop, Vue } from "vue-property-decorator"; */
export default {
  data(){
    return {
      msg2:'msg2',
      flag:true,
      title:"duoduo"
    }
  },
  components: {
    HelloWorld,
  },
  methods:{
    setMsg(){
      this.msg2="改了之后"
    },
    getpose(){
      this.$router.push({
        path:'/about'
      })
    }
  },
  getChildDate(){
    this.$refs.header.run();//zhuf
  },
  beforeCreate(){
    console.log("实例刚刚被创建1")
  },
  creadted(){
    console.log("实例已经创建完成2")
  },
  beforeMount(){
    console.log("模板编译之前3")
  },
  mounted(){
    console.log("模板编译完成4")
  },
  beforeUpdate(){
    console.log("数据更新之前")
  },
  updated(){
    console.log("数据更新完毕")
  },
  beforeDestroy() {
    console.log("实例销毁之前")
  },
  destroyed() {
    console.log("实例销毁完成")
  },
}





/* @Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
