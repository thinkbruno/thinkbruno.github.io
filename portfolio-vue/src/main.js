import { createApp } from 'vue'
import { loadTheme } from './utils/theme'

import App from './App.vue'
import router from './router'

import './assets/css/variables.css'
import './assets/css/global.css'
import './assets/css/utilities.css'
import '@/assets/css/components/whatsapp.css'
import './assets/css/components/header.css'
import './assets/css/components/footer.css'
import './assets/css/components/hero.css'
import './assets/css/components/about.css'
import './assets/css/components/services.css'
import './assets/css/components/projects.css'


loadTheme()

createApp(App)
    .use(router)
    .mount('#app')