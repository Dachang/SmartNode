import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SyllabusPage from '@/components/SyllabusPage'
import HomeworkPage from '@/components/HomeworkPage'
import HomeworkDetail from '@/components/content/homework/HomeworkDetail'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: SyllabusPage,
      redirect: '/syllabus/1'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/syllabus',
      redirect: '/syllabus/1'
    },
    {
      path: '/syllabus/:id',
      name: 'Syllabus',
      component: SyllabusPage
      // children:[
      // {
      //   path:'01',
      //   component:
      // }
      // ]
    },
    {
      path: '/homework',
      name: 'Homework',
      component: HomeworkPage,
      // children:[{
      //   path:':id',
      //   component:HomeworkDetail
      // }]
    },
    {
      path: '/homework/:id',
      name: 'HomeworkDetail',
      component: HomeworkDetail
    },
    {
      path: '/score',
      name: 'Score',
      component: SyllabusPage
    },
    {
      path: '/group',
      name: 'Group',
      component: Hello
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: SyllabusPage
    },
    {
      path: '/files',
      name: 'Files',
      component: Hello
    },
    {
      path: '/message',
      name: 'Message',
      component: SyllabusPage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Hello
    }
  ]
})
