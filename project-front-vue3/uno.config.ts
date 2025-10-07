import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetWind, presetIcons } from "unocss";
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    "bg-image": "w-full h-full bg-cover bg-no-repeat bg-center-top",
    border: "border border-1 border-solid border-gray",
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
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      main: "#4E98F4",
    },
  },
});
