import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import defineVue from '../../components/components/defineVue/defineVue'
import addressChoose from '../../components/components/addressChoose/addressChoose'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/defineVue',
      name: 'defineVue',
      component: defineVue
    },
    {
      path: '/addressChoose',
      name: 'addressChoose',
      component: addressChoose
    }
  ]
})
