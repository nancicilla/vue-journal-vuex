import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from '@/style/style.scss'
import store from './store'


createApp(App).use(store).use(router).use(style).mount('#app')
