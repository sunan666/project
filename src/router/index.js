import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/page1'
import PageOne from '@/components/page1-1'
import Page2 from '@/components/page2'

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
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
      children: [
        {
          path: '/page1/page1-1',
          name: 'page1-1',
          component: PageOne
        }
      ]
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
