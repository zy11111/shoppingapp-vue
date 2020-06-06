<template>
    <div class="edit_address">
        <nav-bar :title="title"></nav-bar>
        <div class="address_list">
            <ul>
                <li v-for="(item) in curr_user.add_info" :key="item.add_id">
                    <p class="name">{{item.name}}</p>
                    <p class="tel">{{item.tel}}</p>
                    <p class="address">{{item.city}}{{item.address}}</p>
                    <router-link class="edit" :to="{name: 'modifyAddress', query: {add_id: item.add_id}}">编辑</router-link>
                </li>
            </ul>
            
        </div>
        <div class="add_btn">
            <router-link :to="{path: '/Profile/AddAddress', query: {id: id}}">
                <el-button type="danger">新增收货地址</el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import navBar from '../NavBar'
import { mapState } from 'vuex'
export default {
    name: 'editAddress',
    data() {
        return {
            title: '我的收货地址',
            // address: [],
            id: this.$route.query.id
        }
    },
    components: {
        navBar
    },
    computed: {
        ...mapState(['curr_user'])
    },
    methods: {
    },
}
</script>

<style lang="" scoped>
    .edit_address {
        height: 100%;
        background-color: #f5f5f5;
    }
    .address_list {
        margin-top: 15px;
        color: #2c3e50;
        font-size: 14px;
        background-color: #fff;
    }
    .address_list {
        /* padding: 10px; */
    }
    .address_list li {
        padding: 10px;
        border-bottom: 1px solid #eee;
        position: relative;
    }
    .address_list p {
        margin: 0;
        text-align: left;
        line-height: 23px;
    }
    .address_list .edit {
        color: #409eff;
        font-size: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
    }
    .add_btn {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 10px;
    }
    .add_btn a {
        display: block;
        /* width: 90%; */
        /* height: 40px; */
    }
    .add_btn .el-button {
        width: 90%;
        background-color: #ff65af;
    }
</style>