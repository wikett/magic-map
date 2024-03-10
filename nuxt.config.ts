// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    "/**": { isr: true },
    "/api/**": { isr: false },
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-lodash",
    "nuxt-jsonld",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@stefanobartoletti/nuxt-social-share"],
  components: [
    { path: "~/components/common" },
    { path: "~/components/global" },
  ],
  content: {
    documentDriven: true,
  },
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://www.subexpuesta.com",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { dir: "ltr", lang: "es" },
      script: [{ src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5731349288066148', async: true, crossorigin: 'anonymous'}]
    },
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/djhqderty/image/upload/'
    }
  },
  // mapbox: {
  //   accessToken: process.env.MAPBOX_API_KEY
  // }
  
});
