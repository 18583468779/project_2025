import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Layouts from "vite-plugin-vue-layouts";
import { viteMockServe } from "vite-plugin-mock";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    tailwindcss(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true,
      },
      // global imports to register
      imports: [
        // presets
        "vue",
        VueRouterAutoImports,
        "@vueuse/core",
      ],
    }),
    Components({
      directoryAsNamespace: true, // 目录作为命名空间
      collapseSamePrefixes: true, // 相同前缀的组件会合并为一个
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: "icon" })], // 自动导入 Element Plus 组件, 自动导入图标组件
    }),
    Icons({
      autoInstall: true, // 自动安装图标
    }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "default",
    }), // 自动导入布局组件
    viteMockServe({
      // 自动导入 mock 模块
      mockPath: "mock",
      enable: true,
    }),
  ],
});
