<template>
    <div id="withdraw">
        <top-tab title="提现" @back="back">
            <router-link to="ruleExplain"><div class="wrap-top-slot">规则说明</div></router-link>
        </top-tab>
        <div class="container">
            <div class="top-info">
                <div class="wrap-profit-amount relative">
                    <div class="profit-title">总金额 (元)</div>
                    <div class="profit-amount">{{info.SurplusAmount}}</div>
                </div>
                <div class="top-info-tips">提现到账由于有财务审核原因会有延迟3-5天</div>
            </div>
            <div class="wrap-amount">
                <div class="withdraw-title">选择金额</div>
                <div class="withdraw-list">
                    <div class="withdraw-li" :class="{'on':selected===1}" @click="setAmount">
                        <div class="li-title">全部提现</div>
                        <div class="withdraw-amount">{{info.SurplusAmount}}元</div>
                    </div>
                    <div class="withdraw-li" v-if="info.SurplusAmount>=1000" :class="{'on':selected===2}"  @click="setAmount(1000,2)">
                        <div class="li-title">提现</div>
                        <div class="withdraw-amount">1000元</div>
                    </div>
                    <div class="withdraw-li" v-if="info.SurplusAmount>=500" :class="{'on':selected===3}"  @click="setAmount(500,3)">
                        <div class="li-title">提现</div>
                        <div class="withdraw-amount">500元</div>
                    </div>
                    <div class="withdraw-li" v-if="info.SurplusAmount>=100" :class="{'on':selected===4}"  @click="setAmount(100,4)">
                        <div class="li-title">提现</div>
                        <div class="withdraw-amount">100元</div>
                    </div>
                </div>
            </div>
            <div class="confirm-btn" @click="apply">确认</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "withdraw",
        data(){
            return{
                info:{},
                selected:1,
                amount:0
            }
        },
        methods:{
            back:function(){
                let page=this.$route.query.page;
                if(!page){
                    this.platform.back();
                }
            },
            apply:function(){
                if(this.amount<100){
                    this.$toast("余额不足100元，无法提现");
                    return;
                }
                if(this.amount>=100){
                    this.$router.push({name:"card",query:{"amount":this.amount,"page":"withdraw"}});
                }
            },
            setAmount:function(amount,type){
                this.amount=amount||this.amount;
                this.selected=type||1;
            },
            getIntegral:function () {
                this.$post("/api/User/GetMyInfo",{
                    "UserID": window.sessionStorage.getItem("userId"),
                    "Phone": window.sessionStorage.getItem("phone")
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        this.info=res.ReturnObject;
                        this.amount=this.info.SurplusAmount;
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
    .withdraw-li.on{
        background:rgba(100,196,166,1);
    }
    .withdraw-li.on .withdraw-amount,.on .li-title{
        color: #fff;
    }
    .withdraw-amount{
        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(100,196,166,1);
        margin-top: 0.18rem;
    }
    .li-title{
        font-size:0.26rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
        line-height: 0.26rem;
        margin-top: 0.4rem;
    }
    .withdraw-li:nth-child(3n){
        margin-right: 0;
    }
    .withdraw-li{
        float: left;
        width: 2.1rem;
        margin-right: 0.2rem;
        border:1px solid rgba(240,240,240,1);
        border-radius:0.1rem;
        height: 1.52rem;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    .withdraw-list{
        padding: 0 0.3rem;
        overflow: hidden;
    }
    .withdraw-title{
        font-size:0.32rem;
        line-height: 0.4rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
        padding: 0.36rem 0.3rem;
    }
    .confirm-btn{
        height:0.78rem;
        background:rgba(100,196,166,1);
        border-radius:0.39rem;
        width: 3rem;
        position: fixed;
        bottom:0.3rem;
        left: 50%;
        margin-left: -1.5rem;
        text-align: center;
        line-height: 0.78rem;
        font-size:0.32rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    .wrap-top-slot{
        position: absolute;
        right: 0.33rem;
        top:0;
        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        white-space: nowrap;
    }
    .top-info-tips{
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        height: 0.58rem;
        line-height: 0.58rem;
        padding-left: 0.3rem;
        border-top: 1px solid rgba(245,245,245,1);
    }
    .profit-amount{
        font-size:0.34rem;
        font-family:GothamBookRegular;
        font-weight:400;
        color:rgba(100,196,166,1);
        line-height: 0.4rem;
        margin-top: 0.12rem;
        text-align: center;
    }
    .profit-title{
        font-size:0.24rem;
        line-height: 0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        text-align: center;
    }
    .wrap-profit-amount{
        height: 1.54rem;
        padding:0.4rem 0.6rem;
        box-sizing: border-box;
    }
    .top-info{
        border-bottom: 0.2rem solid rgba(245,245,245,1);
        background-color: #fff;
    }
    .wrap-top-slot{
        position: absolute;
        right: 0.33rem;
        top:0;
        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        white-space: nowrap;
    }
</style>
