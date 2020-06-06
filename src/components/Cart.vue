<template>
    <div class="cart">
        <div class="title"><h3>我的购物车</h3></div>
        <div class="mygoods" v-if="login&&cartGoods.length>0">
            <ul class="goods_list">
                <div v-for="item in cartGoods" :key="item.id">
                    <li v-if="item.num>0">
                        <van-card
                        :price="item.price.toFixed(2)"
                        :desc="item.content"
                        :title="item.title"
                        :thumb="item.img"
                        >
                            <div slot="footer">
                                <van-button size="mini" class="addCar" @click="item.num>1?deleteToCart(item.id):(dialogVisible = true)">
                                    <i class="el-icon-remove-outline"></i>
                                </van-button>
                                <van-button size="mini" class="addCar goodsNum">
                                    <span class="num">{{item.num}}</span>
                                </van-button>
                                <van-button size="mini" class="addCar" @click="addToCart(item.id)">
                                    <i class="el-icon-circle-plus"></i>
                                </van-button>
                            </div>
                        </van-card>
                    </li>
                    <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="80%"
                    :before-close="handleClose">
                    <span>你确定删除该商品么？</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="danger" @click="confirmDel(item.id)">删 除</el-button>
                    </span>
                    </el-dialog>
                </div>
            </ul>
            <div class="order">
                <div class="goods_price">商品总价：<span>￥{{computedPrice()}}</span></div>
                <div class="red_packet">红包：
                    <div class="select">
                        <el-select placeholder="无可用红包" v-model="packet">
                            <el-option label="10元红包(满70可用)" value="10"></el-option>
                            <el-option label="20元红包(满100可用)" value="20"></el-option>
                            <el-option label="30元红包(满150可用)" value="30"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="real_price">商品实付：<span>￥{{computedPrice()}}</span></div>
                <div class="tran_price">运费（实付满49免邮）：<span>￥{{trans_price}}</span></div>
                <div class="total_price">合计：<span>￥{{computedPrice() + trans_price}}</span></div>
            </div>
        </div>
        

        <div class="empty" v-if="login&&cartGoods.length<=0">你还没有添加任何商品哦~</div>

        <router-link class="login" to="/Login" v-if="!login"><el-button type="success">登录</el-button></router-link>
        <tab-bar :active="active"></tab-bar>
    </div>
</template>

<script>
import tabBar from './TabBar'
import { mapState } from 'vuex'
export default {
    name: 'cart',
    data() {
        return {
            active: 1,
            orderList: [],
            trans_price: 6,
            packet: "10元",
            dialogVisible: false
        }
    },
    computed: {
        ...mapState(['cartGoods', 'login'])
    },
    created() {
        this.$store.dispatch('getGoodsList')
    },
    components: {
        tabBar
    },
    methods: {
        addToCart(id) {
            this.$store.commit("increment", id);
        },
        deleteToCart(id) {
            this.$store.commit("decrement", id);
        },
        computedPrice() {
            var sum = 0;
            this.orderList.forEach(element => {
                if(element.num != 0) {
                    sum += element.num * element.price;
                }
            });
            return sum;
        },
        getNum() {
            var num = 0;
            this.goods_num.forEach(element => {
                num += element.num;
            });
            return num;
        },
        handleClose(done) {
            this.dialogVisible = false;
        },
        confirmDel(id) {
            this.dialogVisible = false;
            this.$store.commit('deleteItem', id)
        }
    }
}
</script>

<style lang="" scoped>
    .cart {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #f5f5f5;
    }
    .title {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        background-color: #fff;
    }
    .title h3 {
        color: #2c3e50;
        margin: 0;
        font-size: 16px;
    }
    .mygoods {
        margin-top: 10px;
    }
    .mygoods .goods_list {
        width: 100%;
        background-color: #fff;
    }
    .mygoods .goods_list li {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #e4e7ed;
    }
    .goods_list >>> .van-card__content {
        margin-left: 20px;
        text-align: left;
    }
    .goods_list >>> .van-card__title {
        color: #2c3e50;
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .goods_list >>> .van-card__desc {
        font-size: 14px;
        line-height: 30px;
        max-height: 30px;
        color: #2c3e50;
    }
    .goods_list >>> .van-card__price {
        font-size: 18px;
        line-height: 32px;
        /* color: #2c3e50; */
        color: #ff65af;
        font-weight: 700;
    }
    .goods_list >>> .van-card__num {

    }
    .goods_list >>> .van-card__footer {
        position: absolute;
        bottom: 5px;
        right: 0;
    }
    .goods_list >>> .van-card__footer .icon-gouwu {
        font-size: 24px;
        color: #fff;
    }
    .goods_list >>> .van-card__footer div {
    }
    .goods_list >>> .van-card__footer .van-button {
        height: 18px;
        background-color: #ff65af;
        border-radius: 50%;
        text-align: center;
        line-height: 18px;
        margin: 0;
    }
    .goods_list >>> .van-card__footer .van-button::before {
        background: none;
        border: none;
    }
    .goods_list >>> .van-card__footer .van-button--mini {
        min-width: 10px;
    }
    .goods_list >>> .van-card__footer .addCar {
        background-color: #fff;
        width: 18px;
        border: none;
    }
    .goods_list >>> .van-card__footer .goodsNum {
        background: none;
    }
    .goods_list >>> .van-card__footer .addCar .van-button__text {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .goods_list >>> .el-icon-remove, 
    .goods_list >>> .el-icon-remove-outline, 
    .goods_list >>> .el-icon-circle-plus {
        border-radius: 50%;
        color: #ff65af;
        font-size: 18px;
        box-sizing: border-box;
    }
    .num {
        font-size: 14px;
        margin: 0 5px;
    }
    .order {
        width: 100%;
        background-color: #fff;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        color: #2c3e50;
        font-size: 14px;
    }
    .goods_price, .red_packet, .real_price, .tran_price, .total_price {
        line-height: 40px;
    }
    .order div span {
        float: right;
    }
    .red_packet {
        display: inline-block;
    }
    .red_packet .select {
        display: inline-block;
    }
    .el-select-dropdown__item {
        color: #DCDFE6;
    }
    .empty {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .login {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>