// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'

import VueResource from 'vue-resource'

Vue.use(VueResource)

import '@/assets/iconfont/iconfont.css'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// import { Tabbar, TabbarItem, Card } from 'vant';
import vant from 'vant';
import 'vant/lib/index.css';

import VueLazyLoad from 'vue-lazyload'

// Vue.use(Tabbar).use(TabbarItem);
// Vue.use(Card);
Vue.use(vant);

Vue.use(ElementUi)

Vue.use(VueLazyLoad,{
  // preLoad: 1.3,
  error:'../static/error.png',
  loading:'../static/loading.gif',
  // attempt: 3
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注入store
  store,
  router,
  components: { App },
  template: '<App/>'
})
