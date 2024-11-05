import { createRouter,createWebHashHistory  } from 'vue-router'
import home from '../views/home.vue'
import safeTripForm from '../views/safeTripForm.vue'
import safeTrip from '../views/safeTrip.vue'
import examResult from '../views/examResult.vue'
import examForm from '../views/examForm.vue'
import siteCodeForm from '../views/siteCodeForm.vue'
import siteCode from '../views/siteCode.vue'



const routes = [
  
  { path: '/', component: home },
  { path: '/safeTripForm', component: safeTripForm },
  { path: '/safeTrip', component: safeTrip  },
  { path: '/examResult', component: examResult },
  { path: '/examForm', component: examForm },
  { path: '/siteCodeForm', component: siteCodeForm },
  { path: '/siteCode', component: siteCode },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, 
})
export default router
