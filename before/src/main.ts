import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'  
import 'ant-design-vue/dist/reset.css';
import router from './routes';
// 引入iconfont
import './assets/iconfont/iconfont.css' 
import './assets/font_t4byzatr58/iconfont.css'

const app = createApp(App)  
app.use(router)
app.use(Antd)  
app.mount('#app')
