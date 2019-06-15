<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.url">
        <router-link to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" src="../../assets/images/menu1.png">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.pubdate | dateFormat}}</span>
              <span>点击：{{item.copyright}}次</span>
            </p>
          </div>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//vue resoure
import { Toast } from "mint-ui";
/* 
      this.axios
        .get("http://api.komavideo.com/news/list")
        .then(response => {
          console.log(response.data);
          this.lunbotuList = response.data;
          Toast("成功");
        })
        .catch(response => {
          Toast("加载失败");
          console.log(response);
        });
*/
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewLsit();
  },
  methods: {
    getNewLsit() {
      this.axios
        .get("http://api.komavideo.com/news/list")
        .then(response => {
          console.log(response.data);
          this.newslist = response.data;
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
.mui-table-view {
  li {
    h1 {
      font-size: 0.14rem;
    }
    .mui-ellipsis {
      font-size: 0.12rem;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>