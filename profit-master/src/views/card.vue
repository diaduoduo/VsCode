<template>
    <div id="card">
        <top-tab title="银行卡"  @back="back"></top-tab>
        <div class="container">
            <div class="list">
                <div class="li" v-for="item in list" :key="item.ID" @click="apply(item)">
                    <div class="bank">{{item.Bank}}</div>
                    <div class="bank-card"><span>**** **** ****</span> {{item.bankNumberEnd}}</div>
                    <img src="../assets/img/icon_edit@2x.png" @click="go(item,$event)" alt="" class="edit">
                </div>
                <div class="li li-add" @click="go('',$event)">
                    <img src="../assets/img/icon_quant_add_lit@2x.png" alt="" class="add">
                    <div class="add-title">添加银行卡</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        data(){
            return{
                amount:0,
                page:1,
                list:[],
                total:0,
                processing:false,
                processing2:false
            }
        },
        methods:{
            back:function(){
                let page=this.$route.query.page;
                if(!page){
                    this.platform.back();
                }
            },
            getCard:function(){
                if(this.processing)return;
                if(this.list.length!==0&&this.total===this.list.length)return;
                this.processing=true;
                this.$get("/api/RevenueRecords/MyBankCard",{
                    params:{
                        PageIndex:this.page,
                        PageSize:12
                    }
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        res.ReturnObject.Items.forEach(val=>{
                            val.bankNumberEnd=val.CardNumber.substr(-4,4);
                        });
                        this.list=this.list.concat(res.ReturnObject.Items);
                        this.total=res.ReturnObject.TotalItems;
                        this.page++;
                    } else {
                        this.$toast(res.Message)
                    }
                }).finally(()=>{
                    this.processing=false;
                })
            },
            go:function (item,e) {
                e.stopPropagation();
                if(item){
                    window.sessionStorage.setItem("card",JSON.stringify(item));
                }
                this.$router.push({name:"addCard"});
            },
            apply:function (item) {
                if(this.processing2)return;
                this.processing2=true;
                if(this.$route.query.amount&&this.$route.query.amount>=100){
                    this.$post("/api/RevenueRecords/WithdrawalApplication",{
                        "BankCardID": item.ID,
                        "WithdrawAmount": this.$route.query.amount
                    }).then(res=>{
                        if (res.ReturnCode === 0) {
                            this.$toast("您的申请已提交");
                            this.$router.replace({name:"profit",query:{tab:"cash"}});
                        } else {
                            this.$toast(res.Message)
                        }
                    }).finally(()=>{
                        this.processing2=false;
                    })
                }
            },
            scroll:function () {
                let el=document.documentElement;
                if(el.scrollTop+el.clientHeight+20>el.scrollHeight){
                    this.getCard();
                }
            }
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
        created:function () {
            this.amount=this.$route.query.amount||0;
            this.getCard();
        }
    }
</script>

<style scoped>
    .add-title{
        font-size:0.32rem;
        text-align: center;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
        margin-top: 0.39rem;
        text-decoration: none;
    }
    .add{
        width: 0.44rem;
        height: 0.44rem;
        display: block;
        margin: 0 auto;
    }
    .edit{
        position: absolute;
        right: 0.48rem;
        top:0.52rem;
        width: 0.36rem;
        height: 0.36rem;
    }
    .bank-card span{
        vertical-align: middle;
        font-size: 0.4rem;
        line-height: 0.5rem;
        height: 0.5rem;
        display: inline-block;
    }
    .bank-card{
        font-size:0.46rem;
        line-height: 0.5rem;
        height: 0.5rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(255,255,255,1);
        margin-top: 0.8rem;
        padding-left: 0.47rem;
    }
    .bank{
        font-size:0.34rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height: 0.4rem;
        padding-left: 0.47rem;
        padding-top: 0.5rem;
    }
    .list {
        padding: 0.4rem 0.3rem;
    }
    .li{
        width:6.9rem;
        height:2.6rem;
        background:rgba(100,196,166,1);
        border-radius:0.1rem;
        position: relative;
        margin-bottom: 0.3rem;
    }
    .li-add{
        background:rgba(240,240,240,1);
        padding-top: 0.67rem;
        box-sizing: border-box;
    }
</style>
