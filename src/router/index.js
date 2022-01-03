import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../components/Detail.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
