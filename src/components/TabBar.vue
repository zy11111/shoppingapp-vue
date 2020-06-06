<template>
    <div class="tab_bar">
        <van-tabbar v-model="active">
            <van-tabbar-item class="iconfont icon-shouye" to="/Home">首页</van-tabbar-item>
            <van-tabbar-item :info="getNum()>0?getNum():''" class="iconfont icon-gouwuche" to="/Cart">购物车</van-tabbar-item>
            <van-tabbar-item class="iconfont icon-wode" to="/Profile">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'tabBar',
    data() {
        return {
            // active: 0,
            goodsList: [],
            // goods_num: this.$store.getters.getState
        }
    },
    props: ['active'],
    methods: {
        getNum() {
            var num = 0;
            // this.goods_num.forEach(element => {
            //     num += element.num;
            // });
            return num;
        }
    }
    
}
</script>

<style lang="" scoped>
    .tab_bar {
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        z-index: 9;
    }
    .icon-shouye:before, .icon-gouwuche:before, .icon-wode:before {
        font-size: 25px;
    }
    .tab_bar >>> .van-tabbar-item .van-info {
        background-color: #ff65af;
        font-size: 14px;
        line-height: 20px;
        min-width: 27px;
        font-weight: 400;
        top: -23px;
        right: -13px;
    }
    .tab_bar >>> .van-tabbar-item--active{
        color: #ff65af;
    }
</style>