import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from './router'
//Vuex
import store from './store'
//antd组件
import {
  Layout,
  Form,
  Button,
  Menu,
  Input,
  Breadcrumb,
  Dropdown,
  Popconfirm,
  Table,
  Col,
  Row,
  InputNumber
} from 'ant-design-vue'

//import { createI18n } from 'vue-i18n'

//css样式
import 'ant-design-vue/dist/antd.css'
//axios
import Axios from 'axios'
const app = createApp(App)

// https://v3.cn.vuejs.org/api/application-config.html#globalproperties
app.config.globalProperties.$axios = Axios

app
  .use(Layout)
  .use(Form)
  .use(Button)
  .use(Menu)
  .use(Input)
  .use(Breadcrumb)
  .use(Dropdown)
  .use(Popconfirm)
  .use(Table)
  .use(Col)
  .use(Row)
  .use(InputNumber)

app.use(store).use(router).mount('#app')
