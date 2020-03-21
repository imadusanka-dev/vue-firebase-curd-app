import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Newemployee from '@/components/Newemployee'
import Viewemployee from '@/components/Viewemployee'
import Editemployee from '@/components/Editemployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: Newemployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: Editemployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: Viewemployee
    }
  ]
})
