import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App'
import Index from './components/Index'
import About from './components/About'
import Ours from './components/Ours'
import Login from './components/Login'
import Register from './components/Register'
// 引入 bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 引入 layui
import '../static/js/layui-v2.2.5/layui/css/layui.css'
import '../static/js/layui-v2.2.5/layui/layui.js'
// 引入 layer PC版本
import '../static/js/layer-v3.1.0/layer/layer.js'
import '../static/js/layer-v3.1.0/layer/theme/default/layer.css'

var router = new VueRouter({
    routes: [
      { path: '/Index', component: Index },
      { path: '/About', component: About },
      { path: '/Ours', component: Ours},
      { path: '/Login', component: Login},
      { path: '/Register', component: Register},
      { path: '/', redirect: '/Index' }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})

