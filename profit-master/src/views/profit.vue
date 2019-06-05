<template>
    <div id="profit">
        <top-tab title="我的收益" @back="back">
            <router-link to="profitExplain?page=profit"><div class="wrap-top-slot">收益说明</div></router-link>
        </top-tab>
        <div class="top-info">
            <div class="wrap-profit-amount relative">
                <div v-show="active==='integral'">
                    <div class="profit-title">我的积分</div>
                    <div class="profit-amount">{{info.IntegralTotal}}</div>
                </div>
                <div v-show="active==='cash'">
                    <div class="profit-title">现金收益</div>
                    <div class="profit-amount">{{info.SurplusAmount}}</div>
                    <div class="btn" @click="goWithdraw">去提现</div>
                </div>
            </div>
            <div class="top-info-tips">收益与提现到账金额如有问题请咨询在线客服</div>
        </div>
        <div class="wrap-list">
            <div class="list-tab">
                <div class="list-tab-li" @click="checkTab('integral')" :class="{'on':active==='integral'}">
                    <span>积分收益</span>
                </div>
                <div class="list-tab-li" @click="checkTab('cash')" :class="{'on':active==='cash'}">
                    <span>现金收益</span>
                </div>
            </div>
            <mt-tab-container v-model="active" :swipeable="true" class="list">
                <mt-tab-container-item id="integral">
                    <div class="record-list">
                        <div class="record-li" v-for="item in list1" :key="item.ID">
                            <div class="profit-way">
                                <span class="way">{{item.Title}}</span>
                                <span class="way-number" :class="{'reduce':!item.IntegraAction}">{{item.IntegraAction?'+'+item.EarlyEnd:'-'+item.EarlyEnd}}</span>
                            </div>
                            <div class="way-time">{{item.TimeCollect}}</div>
                        </div>
                        <div style="text-align: center;margin-top: 40px;" v-if="showTips1">暂无收益</div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="cash">
                    <div class="record-list">
                        <div class="record-li" v-for="item in list2" :key="item.ID">
                            <div class="profit-way">
                                <span class="way">{{item.Title}}</span>
                                <span class="way-number" :class="{'reduce':!item.AmountAction}">{{item.AmountAction=='Increase '?'+':(item.AmountAction==='Reduce'?'-':'')}}{{item.AmountEnd}}</span>
                            </div>
                            <div class="way-time">{{item.OperationTime}}</div>
                        </div>
                        <div style="text-align: center;margin-top: 40px;" v-if="showTips2">暂无收益</div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profit",
        data(){
            return{
                active:"integral",
                processing1:false,
                processing2:false,
                info:{},
                page1:1,
                page2:1,
                total1:0,
                total2:0,
                list1:[],
                list2:[],
                showTips2:false,
                showTips1:false,
            }
        },
        methods:{
            back:function(){
                this.platform.back();
            },
            goWithdraw:function(){
                if(this.info.SurplusAmount<100){
                    this.$toast("余额不足100元，无法提现");
                    return;
                }
                this.$router.push({name:"withdraw",query:{page:"profit"}});
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
            getCashList:function(){
                if(this.processing2)return;
                if(this.list2.length!==0&&this.total2===this.list2.length)return;
                this.processing2=true;
                this.$get("/api/RevenueRecords/MyIntegralRecord",{
                    params:{
                        PageIndex:this.page2,
                        PageSize:12
                    }
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        this.list2=this.list2.concat(res.ReturnObject.Items);
                        this.total2=res.ReturnObject.TotalItems;
                        this.showTips2=this.total2===0;
                        if(this.list2.length!==this.total2){
                            this.page2++;
                        }
                    } else {
                        this.$toast(res.Message)
                    }
                }).finally(()=>{
                    this.processing2=false;
                })
            },
            getIntegralList:function () {
                if(this.processing1)return;
                if(this.list1.length!==0&&this.total1===this.list1.length)return;
                this.processing1=true;
                this.$get("/api/Integral/MyIntegralRecord",{
                   params:{
                       PageIndex:this.page1,
                       PageSize:12
                   }
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        this.list1=this.list1.concat(res.ReturnObject.Items);
                        this.total1=res.ReturnObject.TotalItems;
                        this.showTips1=this.total1===0;
                        if(this.list1.length!==this.total1){
                            this.page1++;
                        }
                    } else {
                        this.$toast(res.Message)
                    }
                }).finally(()=>{
                    this.processing1=false;
                })
            },
            checkTab:function (type) {
                this.active=type;
                // this.init();
            },
            init:function () {
                if(this.active=="integral"){
                    this.processing1=false;
                    if(this.list1.length===0&&!this.showTips1){
                        this.getIntegralList()
                    }
                }else{
                    this.processing2=false;
                    if(this.list2.length===0&&!this.showTips2){
                        this.getCashList()
                    }
                }
            },
            scroll:function () {
                let el=document.documentElement;
                if(el.scrollTop+el.clientHeight+20>el.scrollHeight){
                    if(this.active==="integral"){
                        this.getIntegralList();
                    }else{
                        this.getCashList();
                    }
                }
            }
        },
        created() {
            console.log(process.env);
            this.getIntegral();
            if(this.$route.query.tab){
                this.active=this.$route.query.tab;
            }
            this.getCashList();
            this.getIntegralList();
        },
        beforeRouteLeave:function(to, from, next){
            window.removeEventListener("scroll",this.scroll);
            next();
        },
        beforeRouteEnter:function(to, from, next){
            next(vm=>{
                window.addEventListener("scroll",vm.scroll);
            });
        },
        mounted() {

        }
    }
    function addZero(n) {
        return n>9?n:"0"+n;
    }
</script>

<style scoped>
    .btn{
        width:1.28rem;
        height:0.52rem;
        background:rgba(100,196,166,1);
        border-radius:0.26rem;
        text-align: center;
        line-height: 0.52rem;
        font-size:0.28rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        position: absolute;
        right: 0.6rem;
        top:0.5rem;
    }
    .way-time{
        font-size:0.24rem;
        font-family:GothamBookRegular;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top: 0.24rem;
    }
    .way-number.reduce{
        color:rgba(153,153,153,1);
    }
    .way-number{
        float: right;
        font-size:0.28rem;
        font-family:GothamBookRegular;
        font-weight:400;
        color:rgba(43,43,43,1);
    }
    .profit-way{
        line-height: 0.32rem;
    }
    .way{
        font-size:0.32rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
    }
    .record-li{
        padding: 0.3rem;
    }
    .list{
        padding-top: 4.1rem;
    }
    .list-tab-li.on span{
        color:rgba(100,196,166,1);
        border-bottom:2px solid rgba(100,196,166,1) ;
    }
    .list-tab-li span{
        font-size:0.3rem;
        display: inline-block;
        border-bottom:2px solid #fff ;
    }
    .list-tab-li{
        width: 50%;
        float: left;
        line-height: 0.88rem;
        text-align: center;
        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
        border-bottom: 1px solid rgba(240,240,240,1);
        background-color: #fff;
    }
    .list-tab{
        position: fixed;
        top:3.22rem;
        left: 0;
        width: 100%;
        height: 0.88rem;
        z-index: 10;
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
    }
    .profit-title{
        font-size:0.24rem;
        line-height: 0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .wrap-profit-amount{
        height: 1.54rem;
        padding:0.4rem 0.6rem;
        box-sizing: border-box;
    }
    .top-info{
        position: fixed;
        top:0.88rem;
        left:0;
        width: 100%;
        border-top:1px solid rgba(245,245,245,1);
        border-bottom: 0.2rem solid rgba(245,245,245,1);
        background-color: #fff;
        z-index: 10;
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
