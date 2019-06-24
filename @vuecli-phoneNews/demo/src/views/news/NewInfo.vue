<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题{{newinfo.id}}</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
<!--     <comment-btn></comment-btn> -->
  </div>
</template>

<script>
//导入评论子组件
//import commentBtn from "@/components/subcomponents/commentBtn";
export default {
  data() {
    return {
      id: this.$route.params.id, //将url地址中传递过来的　ＩＤ值　，挂载到data上　方便以后调用
      newinfo: {}
    };
  },
/*   components: {
    commentBtn
  }, */
  created() {
    this.getNewLsit();
  },
  methods: {
    getNewLsit() {
      this.axios
        .get("http://api.komavideo.com/news/list" + this.id)
        .then(response => {
          console.log(response.data);
          this.newinfo = response.data[0];
          Toast("加载ＯＫ");
        })
        .catch(function() {
          Toast("加载失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 0.14rem;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 1.33rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>