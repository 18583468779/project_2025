import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
  presetIcons,
} from "unocss";
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    "bg-image": "w-full h-full bg-cover bg-no-repeat bg-center-top",
    border: "border border-1 border-solid border-gray",
    btn: "px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer",
    "btn-plain":
      "px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer",
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
