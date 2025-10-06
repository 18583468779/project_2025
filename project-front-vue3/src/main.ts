import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import "reset-css";
import "virtual:uno.css";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
