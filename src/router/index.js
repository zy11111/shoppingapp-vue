import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import EditAddress from '@/components/children/EditAddress'
import ModifyAddress from '@/components/children/ModifyAddress'
import AddAddress from '@/components/children/AddAddress'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile,
      // children: [{
      //   path: 'EditAddress',
      //   name: 'editAddress',
      //   component: EditAddress
      // }]
    },
    {
      path: '/Profile/EditAddress',
      name: 'editAddress',
      component: EditAddress
    },
    {
      path: '/Profile/ModifyAddress',
      name: 'modifyAddress',
      component: ModifyAddress
    },
    {
      path: '/Profile/AddAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/GoodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    }
  ]
})
