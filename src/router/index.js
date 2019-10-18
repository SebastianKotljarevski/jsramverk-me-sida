import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'
import Reporttwo from '@/components/Reporttwo'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/report/:kmom',
        name: 'Redovisning',
        component: Report
    },
    {
        path: '/reportkmom02',
        name: 'Redovisning2',
        component: Reporttwo
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }
  ]
})
