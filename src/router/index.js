import { createRouter,createWebHashHistory  } from 'vue-router'

const routes = [
  
  { path: '/', component: () => import('../views/home.vue') },
  { path: '/safeTripForm', component: () => import('../views/safeTripForm.vue')},
  { path: '/safeTrip', component: () => import('../views/safeTrip.vue')  },
  { path: '/examResult', component: () => import('../views/examResult.vue')},
  { path: '/examForm', component: () => import('../views/examForm.vue') },
  { path: '/siteCodeForm', component: () => import('../views/siteCodeForm.vue') },
  { path: '/siteCode', component: () => import('../views/siteCode.vue') },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, 
})
export default router