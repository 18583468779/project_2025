/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
declare module "*.css";
declare module "reset-css"; // 明确声明reset-css模块

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
