import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  FS5 from '../components/FS5'
import  FS7 from '../components/FS7'
import  FS4 from '../components/FS4'
import  FS3 from '../components/FS3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FS5',
      name: 'FS5',
      component: FS5
    },
    {
      path: '/FS7',
      name: 'FS7',
      component: FS7
    },
    {
      path: '/FS4',
      name: 'FS4',
      component: FS4
    },
    {
      path: '/FS3',
      name: 'FS3',
      component: FS3
    }
  ]
})
