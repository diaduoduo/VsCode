<template>
    <div id="ruleExplain">
        <top-tab title="规则说明"  @back="back"></top-tab>
        <div class="container">
            <p>1.提现额度分为500元和10000元两档，每次提现时您可以所选选择所需的一档提现额度，剩余金额可在下次满足前述提现额度时申请提现。</p>
            <p>2.提现一般7-15天内到账（请您理解并同意如遇提现高峰，提现到账时间会延长）。</p>
            <p>3.您理解并同意我们应用先进的人工智能分析您的行为，如发现造假等违规操作，我们有权阻止您使用（填写邀请码，领取积分，提现，奖励）以及取消您获得的奖励。</p>
            <p>4.为保证用户顺利提现，提现需用户按提现页面规范操作，如用户未按提现要求操作或不符合第三方支付平台的要求等原因导致不能收款（如未做实名认证或提现前与平台账号解绑等），所获得的奖励将无法提现，本平台无需承担任何责任。</p>
            <p>5.如果您连续180日未登录本APP，那么此前发放的奖励将过期，系统会在奖励到期前发送提现提醒，逾期未提现则视为用户资源放弃提现的权利，红包账户金额将清零。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ruleExplain",
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
