<template>
  <div>
    <p ref="userinfo">dfgdfg</p>
    <!--      <mt-button>按钮</mt-button> -->
    {{msg}}
    <ul>
      <li v-for="(item,key) in list" :key="item" :class="{'red':key==0,'blue':key==1}">{{item}}</li>

      <li
        v-for="(item,key) in list1"
        :key="item.title"
        :class="{'red':key==0,'blue':key==1}"
      >{{item.title}}</li>

      <li v-for="item in list2" :key="item.title">
        {{item.cate}}
        <ol>
          <li v-for="news in item.list" :key="news">{{news.title}}</li>
        </ol>
      </li>
    </ul>

    <hr>
    <BR/>
    <input type="text" v-model="todo" @keydown="doAdd($event)">
 <!--    <button >添加</button> -->
    <hr>
    <ul>
        <li v-for="(item,key) in lists" :key="key"  v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="savelist"> {{key}} {{item.title}}
            <button @click="removeData(i)">删除</button>
        </li>
    </ul>

    <hr>
    <BR/>
    <ul>
        <li v-for="(item,key) in lists" :key="key" v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="savelist"> {{key}} {{item.title}}
            <button @click="removeData(i)">删除</button>
        </li>
    </ul>
  </div>
</template>

<script>
import storage from '@/model/storage'
export default {
    name:"vueadmin",
  data() {
    return {
      msg: "您虚",
      todo: '',
      lists: [],
      obj: {
        name: "张三"
      },
      list: ["11", "22"],
      list1: [
        { title: "1111" },
        { title: "1133311" },
        { title: "1333111" },
        { title: "333" }
      ],
      list2: [
        {
          cate: "国内新闻",
          list: [
            { title: "国内新闻111" },
            { title: "国内新闻111" },
            { title: "国内新闻111" }
          ]
        },
        {
          cate: "国内新闻1",
          list: [
            { title: "国内新闻111" },
            { title: "国内新闻111" },
            { title: "国内新闻111" }
          ]
        }
      ]
    };
  },
  methods: {
    getInputValue() {
      //获取ref　定义的dom节点
      console.log(this.$refs.userinfo);
      console.log(this.$refs.userinfo.value);
    },
    run1:function(){
        alert("这是一个方法")
    },
    //ex6写发　功能是一样的
    run2(){
        alert("这是一个方法")
    },
    doAdd(e){
        if(e.keyCode ==13){
            this.lists.push({
                title:this.todo,
                checked:false
            })
             this.todo=""
        }
       // localStorage.setItem('lists',JSON.stringify(this.lists))
storage.set('lists',this.lists)
/*         this.lists.push({
            title:this.todo,
        });
        this.todo="" */
    },
    removeData(key){
        //splice js　操作数组的方法
        this.lists.splice(key,1)
        storage.set('lists',this.lists)
        //localStorage.setItem('lists',JSON.stringify(this.lists))
    },
    savelist(){
        storage.set('lists',this.lists)
        //localStorage.setItem('lists',JSON.stringify(this.lists))
    }
  },

  mounted(){//生命周期函数
    //var lists = JSON.parse(localStorage.getItem('lists'));
    var lists = storage.get('lists');
    if(lists){
        this.lists=lists
    }
  }
};
</script>   
<style lang="scss" scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
