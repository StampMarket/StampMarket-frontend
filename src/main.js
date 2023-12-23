import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/router'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(routes)
    .mount('#app')
