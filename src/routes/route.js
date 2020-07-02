import * as Pages from '../pages'

const route = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Pages.Employee
  },
  {
    path: '/employee',
    component: Pages.Employee
  }
]

export default route