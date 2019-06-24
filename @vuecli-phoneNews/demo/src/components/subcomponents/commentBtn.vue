<template>
  <div class="cmt-container" id="commentBtn">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" maxlength="120" cols="30" rows="10"></textarea>
    <div class="cmt-list">
        <div class="cmt-item" v-for="item in comment" :key="item.add_time">
            <div class="cmt-title"></div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>
    </div>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  name: "commentBtn ",
    data(){
        return {
            pageIndex: 1,
            comments: [],
            msg: ""
        }
    },
    created(){
        this.getComments()
    },
    methods: {
        getComments() {
            this.axios
                .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
                .then(response => {
                console.log(response.data);
                //this.comment = response.data;

                //每次获取新评论　不要把老数据覆盖　要拼接上之前的数据
                this.comments = this.comments.concat( response.data)
                Toast("加载ＯＫ");
                })
                .catch(function() {
                Toast("加载失败");
                });
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim().length ==0){
                return Toast("评论不能为空")
            }
            this.axios
                .get("api/posecomments/" + $route.params.id,{
                    content:this.msg.trim()
                })
                .then(response => {
                console.log(response.data);
                var cmt = {
                    user_name :"匿名用户",
                    add_time : Date.now(),
                    content:this.msg.trim()
                };
                this.comments.unshift(cmt)
                })
                .catch(function() {
                Toast("加载失败");
                });
        }
    },
    props:['id']
};
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size:.18rem;
    }
    textarea{
        font-size:.14rem;
        height: .85rem;
        margin:0;
    }
    .cmt-list{
        margin:.1rem 0;
        .cmt-itme{
            font-size:.13rem;
            .cmt-title{
                background-color:blue;
                line-height: .3rem
            }
            .cmt-body{
                background-color:blue;
                text-indent: 2em;
            }
        }
    }
}
</style>