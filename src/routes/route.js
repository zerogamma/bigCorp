import * as Pages from '../pages'

const route = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Pages.Tree
  },
  {
    path: '/tree',
    component: Pages.Tree
  }
]

export default route