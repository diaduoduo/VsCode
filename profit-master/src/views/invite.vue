<template>
    <div id="invite">
        <div class="topTab">
            <img src="../assets/img/icon_back_yao@2x.png" alt="" @click="back" class="back">
            邀请好友
        </div>
        <div>
            <div class="wrap-top relative">
                <img src="../assets/img/friend_bj@2x.png" alt="" class="top-bg">
                <img src="../assets/img/word_friend@2x.png" alt="" class="invite-img">
                <div class="wrap-invite-btn" @click="invite">
                    立即邀请赚钱
                </div>
                <div class="invite-code">长按复制邀请码：{{info.InvitationCode}}</div>
            </div>
            <div class="wrap-explain">
                <div class="title">收益说明</div>
            </div>
            <div class="relative" style="height: 11rem;">
                <img src="../assets/img/line_friend@2x.png" alt="" class="middle">
                <div class="wrap-step step1">
                    <img src="../assets/img/icon_friend_share@2x.png" alt="" class="step-img">
                    <div class="step">分享好友</div>
                </div>
                <div class="wrap-step step2">
                    <img src="../assets/img/icon_friend_down@2x.png" alt="" class="step-img">
                    <div class="step">好友下载APP<br>填写邀请码</div>
                </div>
                <div class="wrap-step step3">
                    <img src="../assets/img/icon_friend_bind@2x.png" alt="" class="step-img">
                    <div class="step">成功绑定<br>好友关系</div>
                </div>
                <div class="wrap-step step4">
                    <img src="../assets/img/icon_friend_shop@2x.png" alt="" class="step-img">
                    <div class="step">好友下单<br>成功购买</div>
                </div>
                <div class="wrap-step step5">
                    <img src="../assets/img/icon_friend_money@2x.png" alt="" class="step-img">
                    <div class="step">成功获得<br>好友佣金</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "invite",
        data(){
            return{
                info:{}
            }
        },
        methods:{
            back:function () {
                this.platform.back();
            },
            invite:function () {
                this.platform.invite();
            },
            getIntegral:function () {
                this.$post("/api/User/GetMyInfo",{
                    "UserID": window.sessionStorage.getItem("userId"),
                    "Phone": window.sessionStorage.getItem("phone")
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        this.info=res.ReturnObject;
                    } else {
                        this.$toast(res.Message)
                    }
                })
            },
        },
        created() {
            this.getIntegral();
        }
    }
</script>

<style scoped>
    .step5{
        top:7.25rem;
        left: 1.29rem;
    }
    .step4{
        top:5.43rem;
        left:5.12rem ;
    }
    .step3{
        top:3.64rem;
        left: 1.16rem;
    }
    .step2{
        top:1.36rem;
        left:4.74rem; ;
    }
    .step1{
        top:0;
        left:1.2rem
    }
    .step{
        text-align: center;
        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height: 0.4rem;
        white-space: nowrap;
    }
    .step-img{
        display: block;
        width: 0.68rem;
        height: 0.68rem;
        margin: 0 auto 0.16rem;
    }
    .wrap-step{
        position: absolute;
    }
    .middle{
        position: absolute;
        top: 0.51rem;
        left: 2.48rem;
        width: 2.2rem;
        height: 7.52rem;
    }
    .title{
        text-align: center;
        font-size:0.34rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(43,43,43,1);
        line-height: 1.7rem;
    }
    .invite-code{
        position: absolute;
        top:5.3rem ;
        left: 0;
        width: 100%;
        text-align: center;
        font-size:0.28rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(43,43,43,1);
    }
    .wrap-invite-btn{
        position: absolute;
        top:4rem ;
        left:50%;
        margin-left: -2rem;
        width: 4rem;
        height: 0.88rem;
        text-align: center;
        line-height: 0.88rem;
        background: url("../assets/img/button_friend_on@2x.png") no-repeat;
        background-size: cover;
        font-size:0.38rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        letter-spacing: 2px;
    }
    .invite-img{
        position: absolute;
        top:2rem;
        left: 50%;
        margin-left: -2.3rem;
        width: 4.6rem;
        height: 1.36rem;
    }
    .top-bg{
        display: block;
        width: 100%;
    }
    .topTab{
        position: fixed;
        top:0;
        left: 0;
        height:0.88rem;
        line-height: 0.88rem;
        font-size:0.32rem;
        font-family:PingFang-SC-Light;
        font-weight:bold;
        color:rgba(51,51,51,1);
        text-align: center;
        width: 100%;
        z-index: 10;
    }
    .back{
        position: absolute;
        left: 0.2rem;
        top: 0.26rem;
        width: 0.36rem;
        height: 0.36rem;
    }
</style>
