import { createApp } from 'vue'
import App from './App.vue'

import router from "@/routes/router";

const app = createApp()

createApp(App)
    .use(router)
    .mount('#app')