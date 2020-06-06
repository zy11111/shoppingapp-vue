<template>
    <div class="modify_address">
        <nav-bar :title="title"></nav-bar>
        <div class="modify">
            <el-form :model="curr_address" :rules="rules" ref="newForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="收货人" prop="name">
                    <el-input v-model="curr_address.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="curr_address.tel"></el-input>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-input v-model="curr_address.city"></el-input>
                </el-form-item>
                <el-form-item label="收货地址" prop="address">
                    <el-input v-model="curr_address.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('newForm')">保存修改</el-button>
                    <el-button type="danger" @click="deleteForm('newForm')" v-if="this.curr_address.add_id">删除收货地址</el-button>
                    <!-- <el-button type="danger" @click="resetForm('ruleForm')" v-if="!this.ruleForm.add_id">重置</el-button> -->
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
            add_id: this.$route.query.add_id,
            id: this.$route.query.id,
        };
    },
    computed: {
        ...mapState(['curr_address']),
    },
    components: {
        navBar
    },
    created() {
        this.$store.commit('setCurrAddress', this.add_id)
        console.log(this.curr_address)
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$store.commit('saveAddress', this.curr_address)
                this.$router.push({
                    path: '/Profile/EditAddress',
                    query: {
                        id: this.id
                    }
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        deleteForm(formName) {
            this.$store.commit('deleteAddress', this.add_id)
            this.$router.push({
                path: '/Profile/EditAddress',
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>

<style lang="" scoped>
    .modify_address {
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