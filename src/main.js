//入口文件，充当路由
// import Vue from 'vue'
import Vue from './assets/js/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'

//引入组件
import home from './components/home.vue'

Vue.use(VueRouter)

//定义路由,路由匹配到的组件将会渲染到App.vue里的<router-view></router-view>
const routes = [
    { path: '/home', component: home }
]
//创建 router 实例，然后传 routes 配置
const router = new VueRouter({
  routes
})
//创建和挂载根实例
new Vue({
	el: '#app',
  	router: router,
  	template: '<App></App>',
  	components: { App }
})