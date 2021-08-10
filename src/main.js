import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = createApp({
  router,
  render: () => h(App),
});

app.mount("#app");
