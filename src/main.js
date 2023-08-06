import { createApp } from "vue";
import App from "./App.vue";
import axios from "@/plugins/axiosInstance.js"; //在该文件中引入了 'axios'
import "./mock/"; //导入mock
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//createApp(App).mount('#app')  原始
const app = createApp(App); //建立一个 vue3app

app.config.globalProperties.$axios = axios; //配置 axios 的全局引用
app.use(ElementPlus); //注入 element-plus

app.mount("#app"); //将这个vue3app全局挂载到#app元素上
