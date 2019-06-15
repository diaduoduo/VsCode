<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.image" alt>
        {{item.title}}
      </mt-swipe-item>
    </mt-swipe>

    <!-- 

        ６宫格效果
    -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 grid_list">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻咨询</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
        <img src="../../assets/images/menu5.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 3.5rem;
}
.mint-swipe-item {
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: palegreen;
  }
  &:nth-child(3) {
    background-color: palevioletred;
  }
}
.mui-grid-view.mui-grid-9 {
    background-color:white;
}
.mui-grid-view.mui-grid-9 li{
    border:none;
}
.grid_list li img{
    width: 60px;
    height: 60px;;
}
</style>