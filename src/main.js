import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'

axios.defaults.baseURL = process.env.VUE_APP_BASE_SAI;

createApp(App).use(store).use(router).mount("#app");
