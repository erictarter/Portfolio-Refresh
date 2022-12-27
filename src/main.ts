import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import "bootstrap/dist/js/bootstrap.js"
import App from './App.vue'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
