import './assets/styles/iconfont.css'
import './assets/styles/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

console.log(import.meta.env)

createApp(App)
.use(router)
.mount('#app')
