import { createRouter,createWebHashHistory  } from 'vue-router'
import safeTripForm from '../views/safeTripForm.vue'
import safeTrip from '../views/safeTrip.vue'
import examResult from '../views/examResult.vue'
const routes = [
  { path: '/safeTripForm', component: safeTripForm },
  { path: '/safeTrip', component: safeTrip },
  { path: '/', component: examResult },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, 
})
export default router