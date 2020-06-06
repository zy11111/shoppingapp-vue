<template>
    <div class="login">
        <nav-bar :title="title"></nav-bar>
        <div class="content">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="">
                    <el-input v-model="form.name" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="success" @click="onSubmit">登录</el-button>
                    <el-button @click="register()">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import navBar from './NavBar'
import { mapState } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            form: {
                name: '王小明',
                password: '123456'
            },
            title: '登录'
        }
    },
    computed: {
        ...mapState(['login', 'is_register', 'msg'])
    },
    methods: {
        onSubmit() {
            
            this.$store.commit('toLogin', {name: this.form.name, password: this.form.password})
            console.log(this.msg)
            if(this.msg == '用户不存在') {
                this.$message({
                    message: '用户不存在',
                    type: 'error',
                    center: true,
                });
            }
            if(this.msg == '密码错误') {
                this.$message({
                    message: '密码错误',
                    type: 'error',
                    center: true,
                });
            } 
            if(this.login) {
                this.$router.push('/Profile')
            }
        },
        register() {
            this.$store.commit('toRegister', this.form)
            if(this.is_register) {
                this.$message({
                    message: '注册成功',
                    type: 'success',
                    center: true,
                });
                this.form.name = ''
                this.form.password = ''
            }
        }   
    },
    components: {
        navBar
    }
}
</script>

<style lang="" scoped>
    .login {
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    .content {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .content >>> .el-form-item__content {
        margin-left: 0 !important;
    }
</style>