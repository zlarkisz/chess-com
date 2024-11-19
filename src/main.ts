import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'


const chessApp = createApp(App)

chessApp.use(router)
chessApp.mount('#app')
