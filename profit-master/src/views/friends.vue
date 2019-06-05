<template>
    <div id="friends">
        <top-tab title="好友列表"  @back="back"></top-tab>
        <div class="container">
            <div class="wrap-search">
                <div class="placeholder" v-show="!keyword">
                    <img src="../assets/img/icon-search_city@2x.png" alt="" class="search-img">
                    <span> 输入好友名字</span>
                </div>
                <input type="text" class="search" :class="{'bgw':keyword}" v-model="keyword" @keyup.enter="getList">
            </div>
            <div class="list">
                <div class="li" v-for="item in list" :key="item.initial" ref="li">
                    <div class="li-letter">{{item.initial}}</div>
                    <div class="li-list" v-for="item2 in item.data" :key="item2.ID">
                        <div class="li-list-li">{{item2.NIkeName}}</div>
                    </div>
                </div>
                <div class="li" style="text-align: center;margin: 40px auto" v-show="showTips">暂无好友</div>
            </div>
            <div class="letter-list">
                <div class="letter-li" @click="goA(index)" ref="letter" v-for="(item,index) in list" :key="item.initial">{{item.initial}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "friends",
        data(){
            return{
                keyword:'',
                list:[],
                showTips:false
            }
        },
        methods:{
            back:function(){
                let page=this.$route.query.page;
                if(!page){
                    this.platform.back();
                }
            },
            goA:function(n){
                let el=this.$refs.li[n];
                let distance=el.offsetTop-this.$refs.li[0].offsetTop;
                window.scrollTo(0,distance);
            },
            getList:function () {
                this.showTips=false;
                this.$get("/api/RevenueRecords/MyGoodFriend",{
                    params:{
                        keyWord:this.keyword.trim()
                    }
                }).then(res=>{
                    if (res.ReturnCode === 0) {
                        // res.ReturnObject=[
                        //     {
                        //         ID:1,
                        //         NIkeName:"张三"
                        //     },
                        //     {
                        //         ID:2,
                        //         NIkeName:"李四"
                        //     },
                        //     {
                        //         ID:3,
                        //         NIkeName:"王五"
                        //     },
                        //     {
                        //         ID:4,
                        //         NIkeName:"哆啦A梦"
                        //     },
                        //     {
                        //         ID:5,
                        //         NIkeName:"雷老五"
                        //     },
                        //     {
                        //         ID:6,
                        //         NIkeName:"吴大碗"
                        //     },
                        //     {
                        //         ID:7,
                        //         NIkeName:"mike"
                        //     },
                        //     {
                        //         ID:8,
                        //         NIkeName:"nike"
                        //     },
                        //     {
                        //         ID:9,
                        //         NIkeName:"迈克尔"
                        //     },
                        //     {
                        //         ID:10,
                        //         NIkeName:"麦克义"
                        //     },
                        //     {
                        //         ID:11,
                        //         NIkeName:"####"
                        //     },
                        //     {
                        //         ID:12,
                        //         NIkeName:"$$$$"
                        //     }
                        // ].concat(res.ReturnObject);
                        this.list=res.ReturnObject.length>0?this.pySegSort(res.ReturnObject):res.ReturnObject;
                        this.showTips= this.list.length===0;
                    } else {
                        this.$toast(res.Message)
                    }
                })
            },
            pySegSort(list){
                if(list.length == 0) return;
                if (!String.prototype.localeCompare) return null;
                var letters = "ABCDEFGHJKLMNOPQRSTWXYZ*".split("");
                var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");
                var segs = []; // 存放数据
                var res = {};
                let curr;
                var re = /[^\u4e00-\u9fa5]/;//中文正则
                var pattern = new RegExp("[`\\-~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？12345678990]"); //特殊符号
                var emoji=/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
                letters.filter((items, i) => {
                    curr = {
                        initial: '', //字母
                        data: [] ,  //数据
                    };
                    list.map((v, index) => {
                        // 特殊字符
                        let arr=Array.from(v.NIkeName);
                        let firstLetter=arr[0];
                        if (pattern.test(firstLetter)||emoji.test(firstLetter)) {
                            if ((!zh[i] || zh[i].localeCompare(v.NIkeName) <= 0) && v.NIkeName.localeCompare(zh[i+1]) == -1) {
                                curr.data.push(v);
                            }
                        }
                        // 判断首个字是否是中文
                        if (re.test(v.NIkeName[0])) {
                            // 英文
                            if (v.NIkeName[0].toUpperCase() == items) {
                                curr.data.push(v);
                            }
                        } else {
                            // 中文
                            if (zh[i] && zh[i].localeCompare(v.NIkeName) <= 0 && v.NIkeName.localeCompare(zh[i+1]) == -1) {
                                curr.data.push(v);
                            }
                        }

                    })

                    if ( curr.data.length) {
                        curr.initial = letters[i];
                        segs.push(curr);
                        curr.data.sort((a, b) => {
                            return a.NIkeName.localeCompare(b.NIkeName);
                        });
                    }
                })
                res.segs = Array.from(new Set(segs)) //去重
                return res.segs;
            }
        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>
    .letter-li{
        color: #64C4A6;
        font-size: 0.24rem;
        font-family: PingFang-SC-Regular;
        width: 0.24rem;
        text-align: center;
        margin-bottom: 0.1rem;
    }
    .letter-li:last-child{
        margin-bottom: 0;
    }
    .letter-list{
        position: fixed;
        right: 0.08rem;
        top: 50%;
        -webkit-transform: translate(0,-50%);
        -moz-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        -o-transform: translate(0,-50%);
        transform: translate(0,-50%);
    }
    .li-list-li{
        font-size:0.26rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(43,43,43,1);
        line-height: 1.06rem;
        padding-left: 0.3rem;
    }
    .li-letter{
        height: 0.48rem;
        line-height: 0.48rem;
        background:rgba(243,242,242,1);
        padding: 0 0.3rem;
        font-size:0.28rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(43,43,43,1);
    }
    .list{
        padding-top: 0.78rem;
        padding-bottom: 1rem;
    }
    .search-img{
        width: 0.26rem;
        height: 0.26rem;
        vertical-align: middle;
    }
    .placeholder span{
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(138,138,138,1);
        line-height:0.56rem ;
    }
    .placeholder{
        position: absolute;
        top:0.12rem;
        left:0.2rem;
        width: 7.1rem;
        height: 0.56rem;
        background-color: #fff;
        z-index: -1;
        text-align: center;
    }
    .wrap-search{
        position: fixed;
        top: 0.88rem;
        left:0;
        padding: 0.12rem 0.2rem;
        width: 7.1rem;
        height: 0.56rem;
        background:rgba(243,242,242,1);
    }
    .search{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0 0.2rem;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0);
        border-radius:0.04rem;
        border: 0;
        outline: 0;
    }
    .bgw{
        background-color: #fff;
    }
</style>
