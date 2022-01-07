import './assets/styles/iconfont.css'
import './assets/styles/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vantUi from './vantUi'
import globalMethods from './utils/globalMethods'
// console.log(import.meta.env)


createApp(App)
.use(router)
.use(globalMethods)
.use(vantUi)
.mount('#app')
