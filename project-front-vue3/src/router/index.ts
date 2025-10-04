import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

// 路由模式
// hash: 带#号，即浏览器地址栏中的#符号
// history: 不带#号，即浏览器地址栏中没有#符号
/**
 * history 模式 API pushState replaceState popState
 * hash 模式 API hashchange
 *  不利于我们的SEO -> 抓取HTML
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
