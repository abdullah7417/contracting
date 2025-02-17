import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import BootstrapVueNext from "bootstrap-vue-next";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createPinia } from "pinia";
import "../src/assets/style/style.scss";

const vueApp = createApp(App);
vueApp.use(BootstrapVueNext).use(createPinia()).use(router).mount("#app");
