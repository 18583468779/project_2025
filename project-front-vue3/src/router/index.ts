import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";
import { setupLayouts } from "virtual:generated-layouts";
// 路由模式
// hash: 带#号，即浏览器地址栏中的#符号
// history: 不带#号，即浏览器地址栏中没有#符号
/**
 * history 模式 API pushState replaceState popState
 * hash 模式 API hashchange
 *  不利于我们的SEO -> 抓取HTML
 */
const router = createRouter({
  history: createWebHistory(), // 明确指定 history 模式
  routes: setupLayouts(routes), // 自动添加布局组件
});

// 重定向
router.beforeEach((to, from, next) => {
  if (to.path === "/home") {
    next({ path: "/" });
  } else {
    next();
  }
});
export default router;
