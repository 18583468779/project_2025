import { defineConfig } from "unocss";
import { presetWind, presetIcons } from "unocss";
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    "bg-image": "w-full h-full bg-cover bg-no-repeat bg-center-top",
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: "i-",
      // collections: {
      //   mdi: () => import('@iconify/json/json/mdi.json').then((i) => i.default)
      // },
      extraProperties: {
        display: "inline-block",
      },
      autoInstall: true,
    }),
  ],
});
