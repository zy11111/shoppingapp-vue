<template>

    <div class="profile">
        <div class="title"><h3>我的</h3></div>
        <router-link class="login" to="/Login" v-if="!login"><el-button type="success">登录</el-button></router-link>
        <div class="personal" v-if="login">
            <h3>当前用户：<span class="name">{{curr_user.name}}</span></h3>
            <router-link class="address" :to="{path: '/Profile/EditAddress', query: {id:curr_user.id}}" tag="div">
                <el-button>我的地址<i class="el-icon-arrow-right"></i></el-button>
            </router-link>
            <div class="exit" @click="Logout"><el-button type="danger">退出登录</el-button></div>
        </div>
        <tab-bar :active="active"></tab-bar>
        
    </div>
</template>

<script>
import tabBar from './TabBar'
import { mapState } from 'vuex'
export default {
    name: 'profile',
    data() {
        return {
            active: 2,
            info: [],
            id: 1
        }
    },
    components: {
        tabBar
    },
    computed: {
        ...mapState(['login', 'curr_user'])
    },
    created() {
        // for(var i = 0; i < this.$store.state.user_info.length; i++) {
        //     if(this.$store.state.user_info[i].id == this.id) {
        //         this.info = this.$store.state.user_info[i];
        //     }
        // }
        // console.log(this.info)
    },
    methods: {
        Logout() {
            this.$store.commit('toLogout')
        }
    }
}
</script>

<style lang="" scoped>
    .profile {
        width: 100%;
        height: 100%;
        position: relative;
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
    .login {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .personal {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .personal h3 {
        font-size: 16px;
        height: 50px;
        line-height: 50px;
    }
    .address  {
        width: 100%;
        margin-top: 10px;
    }
    .address .el-button {
        position: relative;
        width: 100%;
        /* border-left: 0; */
        /* border-right: 0; */
        text-align: left;
    }
    .address .el-icon-arrow-right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        color: #2c3e50;
    }
    .exit {
        margin-top: 10px;
        width: 100%;
    }
    .exit >>> .el-button--danger {
        width: 100%;
    }
</style>