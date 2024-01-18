import Vue from 'vue'
import VueRouter from 'vue-router'
import StarterView from '../views/StarterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'starter',
    component: StarterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    next('/');
  } else {
    next();
  }
});

export default router
