import './style.css'


import { createApp } from 'vue'
import App from './App.vue'
import { Tree,Table,Card,Input } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)

app.use(Tree).use(Table).use(Card).use(Input).mount('#app')
