<template>
    <div class="goods_detail">
        <nav-bar :title="title"></nav-bar>
        <div class="main">
            <div class="goods_img">
                <img :src="getItem.img" alt="">
            </div>
            <div class="jieshao">
                <h3>{{getItem.title}}</h3>
                <p>{{getItem.content}}</p>
                <p>￥ <span class="price">{{getItem.price}}</span></p>
            </div>
            <div class="intro">
                <p v-for="item in 30" :key="item">这是{{getItem.title}} 的商品详细介绍</p>
            </div>
        </div>
        <div class="footer">
            <router-link href="javascript:;" class="icon" to="/Cart">
                <el-badge :value="getItem.num>0?getItem.num: ''" class="item">
                    <i class="el-icon-goods"></i>
                </el-badge>
            </router-link>
            <a href="javascript:;" class="addCar" @click="addNum(getItem.id)"><el-button type="danger">加入购物车</el-button></a>
        </div>
    </div>
</template>

<script>
import navBar from './NavBar'
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'goodsDetail',
    data() {
        return {
            title: '商品详情',
            id: this.$route.query.id
        }
    },
    computed: {
        ...mapGetters(['getItem']),
        ...mapState(['login'])
    },
    created() {
        this.$store.dispatch('getGoodsList')
    },
    methods: {
        addNum(id) {
            if(this.login) {
                this.$store.commit("increment", id)
            } else {
                this.$message({
                    message: '请先登录',
                    type: 'warning',
                    center: true,
                });
            }
        }
    },
    components: {
        navBar
    }
}
</script>

<style lang="" scoped>
    a {
        text-decoration: none;
        color: #2c3e50;
    }
    h3, p {
        margin: 0;
    }
    .main {
        margin-bottom: 60px;
    }
    .goods_img {
        width: 100%;
        border-top: 1px solid #eee;
    }
    .jieshao {
        width: 90%;
        border: 1px solid #eee;
        box-sizing: border-box;
        margin: 0 auto;
        color: #2c3e50;
    }
    .jieshao h3, .jieshao p {
        font-size: 16px;
        line-height: 40px;
    }
    .jieshao p {
        font-size: 14px;
    }
    .jieshao .price {
        color: #ff65af;
    }
    .intro {
        margin-top: 10px;
        border-top: 1px solid #eee;
        padding: 10px;
    }
    .intro p {
        font-size: 14px;
        color: #2c3e50;
        line-height: 20px;
    }
    .footer {
        width: 100%;
        height: 50px;
        border: 1px solid #eee;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .footer a {
        display: inline-block;
    }
    .footer .icon {
        width: 20%;
        height: 100%;
        float: left;
    }
    .footer .icon i {
        width: 25px;
        height: 25px;
        font-size: 25px;
        margin-top: 12px;
    }
    .footer .addCar {
        width: 80%;
        height: 100%;
    }
    .footer .el-button--danger {
        width: 100%;
        height: 100%;
        border-radius: 0;
        background-color: #ff65af;
    }
    .footer >>> .el-badge__content {
        background-color: #ff65af;
    }
    .footer >>> .el-badge__content.is-fixed {
        top: 20px; 
        right: 15px;
    }
</style>