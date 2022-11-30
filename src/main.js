import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './common/router'
import store from './store'




const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')