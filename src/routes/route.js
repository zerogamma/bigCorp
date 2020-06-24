import * as Pages from '../pages'

const route = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Pages.Home
  },
]

export default route