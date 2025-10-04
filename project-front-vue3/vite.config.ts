import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";

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
      ],
    }),
  ],
});
