import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import defineVue from '../../components/components/defineVue/defineVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		 {
		  path: '/component',
		  name: 'component',
		  component: defineVue
		}
  ]
})
