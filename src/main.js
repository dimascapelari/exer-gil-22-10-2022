import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-5-2-2/index.js'

createApp(App).use(router).mount('#app')
