import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Syllabus from '@/components/Syllabus'
import Homework from '@/components/Homework'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Syllabus
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/syllabus',
      name: 'Syllabus',
      component: Syllabus
    },
    {
      path: '/homework',
      name: 'Homework',
      component: Homework
    },
    {
      path: '/score',
      name: 'Score',
      component: Syllabus
    },
    {
      path: '/group',
      name: 'Group',
      component: Hello
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Syllabus
    },
    {
      path: '/files',
      name: 'Files',
      component: Hello
    },
    {
      path: '/message',
      name: 'Message',
      component: Syllabus
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Hello
    }
  ]
})
