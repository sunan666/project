import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
import Page1 from '@/pages/page1'
import detail from '@/pages/detail'
import Page2 from '@/pages/page2'

// 测试子集路由

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(MintUI)

export default new Router({
  mode: 'history',
  routes: [
    // 首页筛选
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    // 预约
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    // 详情
    {
      path: '/page1/detail',
      name: 'detail',
      component: detail
    }
  ]
})
