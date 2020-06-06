<template>
    <div class="nav_bar">
        <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    name: 'navBar',
    props: ['title'],
    methods: {
        onClickLeft() {
            history.back();
        }
    }
}
</script>

<style lang="" scoped>
    .nav_bar >>> .van-nav-bar {
        height: 50px;
    } 
    .nav_bar >>> .van-nav-bar__arrow {
        font-size: 20px;
    }
    .nav_bar >>> .van-nav-bar .van-icon {
        color: rgb(90, 87, 87);
    }
    .nav_bar >>> .van-nav-bar__title {
        color: #2c3e50;
        font-weight: 700;
    }
</style>