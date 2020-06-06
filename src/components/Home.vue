<template>
    <div class="home">
        <h3 class="title">一小时达</h3>
        <div class="tab">
            <el-tabs type="border-card" style="height:39px" v-model="goodsType" @tab-click="changeGoodsType">
                <el-tab-pane label="全部" name="全部"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="水果" name="水果"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="蔬菜" name="蔬菜"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="肉蛋" name="肉蛋"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="速冻" name="速冻"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="酒饮" name="酒饮"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="乳品" name="乳品"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
                <el-tab-pane label="零食" name="零食"><type-list @tab-click="changeGoodsType()" :kind="kind"></type-list></el-tab-pane>
            </el-tabs>
        </div>
        <tab-bar :active="active"></tab-bar>
    </div>
</template>

<script>
import tabBar from './TabBar'
import typeList from './TypeList'
import { mapState } from 'vuex'
export default {
    name: 'home',
    data() {
        return {
            activeName: 'first',
            goodsType: '全部',
            active: 0
        }
    },
    computed: {
        ...mapState(['kind'])
    },
    methods: {
        //切换商品种类
        changeGoodsType(obj) {
            console.log(obj.index)
            this.$store.commit('changeKind', obj.index)
        }
    },
    components: {
        tabBar,
        typeList
    }
}
</script>

<style lang="" scoped>
    h3 {
        margin: 0;
        padding: 0;
    }
    .home {
        width: 100%;
        height: auto;
    }
    .title {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        /* position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background: #fff; */
    }
    .tab {
        width: 100%;
        height: 39px;
    }
    .tab >>> .el-tabs--border-card>.el-tabs__header {
        /* position: fixed;
        top: 45px;
        left: 0;
        z-index: 9; */
        position: sticky;
        position: -webkit-sticky;   /*  // 兼容 -webkit 内核的浏览器 */
        top: 45px;    
    }
    .tab >>> .el-tabs--border-card>.el-tabs__content {
        padding: 0;
        /* position: relative; */
        /* top: 80px; */
    }
</style>