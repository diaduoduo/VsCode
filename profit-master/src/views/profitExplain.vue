<template>
    <div id="profitExplain">
        <top-tab title="收益说明" @back="back"></top-tab>
        <div class="container">
            <p>1.您可以通过完成本APP内提供的任务来赚取积分、现金。</p>
            <p>2.若金币没有及时到账,别担心，可能会有延迟，如有疑问可以联系在线客服。</p>
            <p>3.如果您连续180日未登录本APP，那么此前发放的奖励将过期，系统会在奖励到期前发送提现提醒，逾期未提现则视为用户资源放弃提现的权利，红包账户金额将清零。</p>
            <p>4.我们应用先进的人工智能分析您的行为，如发现造价等违规操作，我们有权阻止您使用（填写邀请码，领取积分，提现，奖励）以及取消您获得的奖励。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profitExplain",
        methods:{
            back:function(){
                let page=this.$route.query.page;
                if(!page){
                    this.platform.back();
                }
            },
        }
    }
</script>

<style scoped>
    p{
        line-height: 0.4rem;
        margin-top: 0.2rem;
        text-indent: 2em;
        padding: 0 0.2rem;
    }
</style>
