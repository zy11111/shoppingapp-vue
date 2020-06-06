<template>
    <div class="type_list">
        <ul>
            <li v-for="item in goodsList" :key="item.id" >
                <!-- <router-link :to="{path:'/GoodsDetail',query:{id:item.id}}"> -->
                <a @click="toDetail(item.id)">
                    <div class="goods_img">
                        <img :src="item.img" alt="" v-lazy="item.img">
                    </div>
                    <van-card 
                    :price="item.price.toFixed(2)"
                    :desc="item.content"
                    :title="item.title"
                    />  
                </a>
                <!-- </router-link> -->
                <van-card class="card_wrap">
                    <div slot="footer">
                        <van-button size="mini" v-if="!login || item.num<=0" @click="addToCart(item.id)"><i class="iconfont icon-gouwu"></i></van-button>
                        <van-button size="mini" v-if="login&&item.num>0" class="addCar" @click="deleteToCart(item.id)">
                            <i :class="(item.num>1)?'el-icon-remove':'el-icon-remove-outline'"></i>
                        </van-button>
                        <van-button size="mini" v-if="login&&item.num>0" class="addCar goodsNum">
                            <span class="num">{{item.num}}</span>
                        </van-button>
                        <van-button size="mini" v-if="login&&item.num>0" class="addCar" @click="addToCart(item.id)">
                            <i class="el-icon-circle-plus"></i>
                        </van-button>
                    </div>
                </van-card>
            </li>
        </ul>
       
        <div class="hoping"><p>没有更多商品啦，敬请期待！！！</p></div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'typeList',
    // props: ['kind'],
    
    data() {
        return {
            // goodsList: []
        }
    },
    computed: {
        ...mapGetters(['goodsList']),
        ...mapState(['login'])
    },
    created() {
        this.$store.dispatch('getGoodsList')
    },
    methods: {
        toDetail(id) {
            this.$store.commit('setItemId', id)
            this.$router.push({
                path: '/GoodsDetail',
                query:{id: id}
            })
        },

        addToCart(id) {
            if(this.login) {
                this.$store.commit("increment", id);
            } else {
                this.$message({
                    message: '请先登录',
                    type: 'warning',
                    center: true,
                });
            }
        },
        deleteToCart(id) {
            this.$store.commit("decrement", id);
        }
    }
}
</script>

<style lang="" scoped>
    .type_list {
        width: 100%;
        height: auto;
        margin-bottom: 60px;
    }
    .type_list ul {
        width: 100%;
        height: auto;
    }
    .type_list ul li {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #e4e7ed;
    }
    .type_list ul li .goods_img {
        width: 104px;
        height: 104px;
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 3;
    }
    .type_list ul li .goods_img img {
        width: 100%;
        height: 100%;
    }
    .type_list >>> .van-card  {
        margin-right: 100px;
        width: 70%;
    }
    .type_list >>> .van-card__content {
        margin-left: 120px;
        text-align: left;
    }
    .type_list >>> .van-card__title {
        color: #2c3e50;
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .type_list >>> .van-card__desc {
        font-size: 14px;
        line-height: 30px;
        max-height: 30px;
        color: #2c3e50;
    }
    .type_list >>> .van-card__price {
        font-size: 18px;
        line-height: 32px;
        /* color: #2c3e50; */
        color: #ff65af;
        font-weight: 700;
    }
    .type_list >>> .van-card__num {

    }
    .type_list .card_wrap {
        position: absolute;
        right: 10px;
        bottom: 15px;
        margin-right: 0;
        width: 30%;
    }
    .type_list .card_wrap >>> .van-card__content {
        /* margin-left: 20px; */
    }
    .type_list >>> .van-card__footer {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
    .type_list >>> .van-card__footer .icon-gouwu {
        font-size: 24px;
        color: #fff;
    }
    .type_list >>> .van-card__footer div {
    }
    .type_list >>> .van-card__footer .van-button {
        width: 51px;
        height: 51px;
        background-color: #ff65af;
        border-radius: 50%;
        text-align: center;
        line-height: 51px;
        margin: 0;
    }
    .type_list >>> .van-card__footer .van-button::before {
        background: none;
        border: none;
    }
    .type_list >>> .van-card__footer .van-button--mini {
        min-width: 10px;
    }
    .type_list >>> .van-card__footer .addCar {
        background-color: #fff;
        width: 18px;
        height: 18px;
        line-height: 18px;
        border: none;
    }
    .type_list >>> .van-card__footer .goodsNum {
        background: none;
    }
    .type_list >>> .van-card__footer .addCar .van-button__text {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .type_list >>> .el-icon-remove, 
    .type_list >>> .el-icon-remove-outline, 
    .type_list >>> .el-icon-circle-plus {
        border-radius: 50%;
        color: #ff65af;
        font-size: 18px;
        box-sizing: border-box;
    }
    .num {
        font-size: 14px;
        margin: 0 5px;
    }
    .hoping {
        height: 40px;
        line-height: 40px;
    }
    .hoping p {
        font-size: 14px;
        color: #2c3e50;
        margin: 0;
    }
</style>