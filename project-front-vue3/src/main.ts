import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import "reset-css";
import "./assets/main.scss";

import "virtual:uno.css";
import router from "./router";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue/client";

const pinia = createPinia();
const head = createHead(); // 客户端 head 管理

createApp(App).use(pinia).use(head).use(router).mount("#app");
