import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App)
    .use(pinia)
    .use(routes)
    .mount('#app')
