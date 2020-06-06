<template>
    <div class="add_address">
        <nav-bar :title="title"></nav-bar>
        <div class="modify">
            <el-form :model="newForm" :rules="rules" ref="newForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="收货人" prop="name">
                    <el-input v-model="newForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="newForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-input v-model="newForm.city"></el-input>
                </el-form-item>
                <el-form-item label="收货地址" prop="address">
                    <el-input v-model="newForm.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('newForm')">保存修改</el-button>
                    <el-button type="danger" @click="resetForm('newForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import navBar from '../NavBar'
import { mapState } from 'vuex'
export default {
    name: 'addAddress',
    data() {
        return {
            title: '修改收货地址',
            rules: {
                name: [
                    { required: true, message: '请输入名字', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: '请输入所在城市', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入详细地址', trigger: 'blur' }
                ]
            },
            id: this.$route.query.id,
            newForm: {}
        };
    },
    components: {
        navBar
    },
    computed: {
        // ...mapState(['curr_user'])
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.commit('addAddress', this.newForm)
                    this.$router.push({
                        path: '/Profile/EditAddress',
                        query: {
                            id:this.id
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="" scoped>
    .add_address {
        background-color: #f5f5f5;
    }
    .modify {
        background-color: #fff;
        margin-top: 15px;
        padding: 10px;
    }
    .modify >>> .el-form-item__label  {
        float: left;
        text-align: left;
    }
    .modify >>> .el-form-item:last-child {
        margin-top: 100px;
    }
    .modify >>> .el-form-item:last-child .el-form-item__content {
        margin-left: 0px !important;
    }
</style>