<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{$store.state.a.count}}--{{count}}</h3>
        <!-- 差值问题 -->
        <p>
            <button @click="$store.commit('add',10)" type="button">加</button>
            <button @click="$store.commit('reduce')" type="button">减</button>
            <button @click="reduce" type="button">减</button>
        </p>

        <p>
            <button @click="addAction" type="button">加</button>
            <button @click="reduceAction" type="button">减</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return{
            msg:'Hello Vuex'
        }
    },
    computed:{
      //  ...mapState(['count']),
/*         count(){
            return this.$store.getters.count;
        } */
      //  ...mapGetters(['count'])
      count(){
          return this.$store.state.a.count
      }
    },
 // {{$store.state.count}} 简写 {{count}} 三种方法
/*     computed:{
        count(){
            return this.$store.state.count
        }
    }, */
/*     computed:mapState({
        count:state=>state.count
    }), */
     //computed:mapState(['count']),//最常用 数组ES 6
/*     computed:mapState({//最常用 数组ES 5
        count:function(state){
                return state.count
        }
    }), */
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),
      
    },
    store
}
</script>
