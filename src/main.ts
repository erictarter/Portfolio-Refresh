import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { defineStore } from 'pinia'
// import "bootstrap/dist/js/bootstrap.js"
import VueKinesis from "vue-kinesis";
import App from './App.vue'
import './assets/main.scss'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoVue, CoReact, CoSassAlt, CoCss3, LaHtml5, CoJavascript } from "oh-vue-icons/icons";

addIcons(IoLogoVue, CoReact, CoSassAlt, CoCss3, LaHtml5, CoJavascript);

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(VueKinesis)

app.mount('#app')
