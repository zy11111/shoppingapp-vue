import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUi)

Vue.use(Vuex)

//创建Vuex实例
const store = new Vuex.Store({
    state: {
        goodsList: [],
        kind: 0,  //商品种类
        itemId: 0,  //商品id
        cartGoods: [],      //购物车商品
        login: false,  //登录状态
        curr_user: null,  //当前用户
        curr_address: null,  //当前地址,
        user_id: 3, //用户id
        address_id: 4, //地址id
        is_register: false, // 注册状态,
        msg: '',   //登录提示信息

        user_info: [
            { id: '1', 
              name: '王小明', 
              password: '123456',
              add_info:[{add_id: 1 ,name: '王小明', tel: '1310000000', city: '浙江省', address: '杭州市拱墅区莫干山路 50 号'},
                        {add_id: 2, name: '哈皮', tel: '13200000000', city: '浙江省', address: '杭州市'}] 
            },
            { id: '2', 
              name: '张三', 
              password: '123456',
              add_info:[{add_id: 3, name: '张三', tel: '13000000000', city: '浙江省', address: '杭州市滨江区江南大道 15 号'}] 
            }
        ]
    },
    //更改store的状态
    mutations: {
        //商品数量加1
        increment(state, id) {
            const item = state.goodsList.find(item=>item.id == id)
            // item.num++
            console.log(state.cartGoods.find(item=>item.id == id))
            if(state.cartGoods.find(item=>item.id == id)) {
                state.cartGoods.find(x => x.id == id).num++
            } else {
                item.num++
                state.cartGoods.push(item)
            }
            console.log(state.goodsList)
        },
        //商品数量-1
        decrement(state, id) {
            state.cartGoods.find(item=>item.id == id).num--
            console.log(state.goodsList)
        },
        //获取商品列表
        getList(state, data) {
            state.goodsList = data
        },
        //切换kind商品种类
        changeKind(state, kind) {
            state.kind = kind
        },
        //跳转详情页时商品id
        setItemId(state, id) {
            state.itemId = id
        },
        //设置商品数量
        setItemNum(state, list) {
            for(let [index, elem] of state.goodsList.entries()) {
                for(let [i, e] of list.entries()) {
                    if(elem.id == e.id) {
                        elem.num = e.num
                    }
                }
            }
        },
        //从购物车删除
        deleteItem(state, id) {
            const index = state.cartGoods.findIndex(x => x.id == id)
            state.cartGoods.splice(index, 1)
        },
        //登录
        toLogin(state, form) {
            console.log(form)
            const user = state.user_info.find(x => x.name == form.name)
            if(user) {
                console.log(form.name, form.password, user)
                if(form.name == user.name) {
                    if(form.password == user.password) {
                        state.login = true
                        state.curr_user = user
                        state.msg = ''
                    } else { 
                        console.log('密码错误')
                        state.msg = '密码错误'
                        // console.log(state.msg)
                    }
                } 
            } else {
                console.log('用户不存在')
                state.msg = '用户不存在'
            }
            console.log(state.msg)
        },
        //注册
        toRegister(state, info) {
            info.id = state.user_id;
            state.user_id++
            info.add_info = []
            if(state.user_info.find(x => x.name == info.name)) {
                console.log('用户已存在')
            } else {
                state.user_info.push(info)
                state.is_register = true
            }
        },
        //退出登录
        toLogout(state) {
            state.login = false
        },
        //当前的收货信息
        setCurrAddress(state, id) {
            state.curr_address = state.curr_user.add_info.find(x => x.add_id == id)
            console.log(state.curr_address)
        },
        //保存收货信息
        saveAddress(state, form) {
            state.curr_address = form
        },
        addAddress(state, newForm) {
            // state.user_info.find(item=>item.id == t_id).add_info.push(newForm)
            console.log(newForm)
            newForm.add_id =state.address_id 
            state.user1_id++
            // console.log(state.curr_user)
            state.user_info.find(x => x.id == state.curr_user.id).add_info.push(newForm)
        },
        deleteAddress(state, id){
            const index = state.user_info.find(x => x.id == state.curr_user.id).add_info.findIndex(item => item.add_id == id)
            state.user_info.find(x => x.id == state.curr_user.id).add_info.splice(index, 1)
        }
    },
    //有异步的时候，需要action
    actions: {
        getGoodsList(context) {
            axios.get('/static/data/goods.json').then(({data}) => {
                console.log(data)
                console.log(context)
                context.commit('getList', data)
                context.commit('setItemNum', context.state.cartGoods)
            }).catch(err => {
                console.log(err)
            })
        },
    },
    //通过getter进行数据获取
    getters: {
        goodsList(state) {
            console.log(state.kind)
            if(state.kind == 0 ) {
                return state.goodsList
            }
            else {
                return state.goodsList.filter(x => x.kind == state.kind)
            }
        },
        getItem(state) {
            return state.goodsList.filter(x => x.id == state.itemId)[0]
        },
        getState(state) {
            return state.goods_car;
        }
    }
})

export default store  //导出store