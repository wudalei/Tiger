import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import TigerMachine from '@/pages/TigerMachine'
import Roller from '@/components/Roller'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/TigerMachine',
      name: 'TigerMachine',
      component: TigerMachine
    }, {
      path: '/Roller',
      name: 'Roller',
      component: Roller
    }
  ]
})
