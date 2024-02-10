// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-mapbox",
    "@nuxt/content",],
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
    },
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/djhqderty/image/upload/'
    }
  },
  mapbox: {
    accessToken: process.env.MAPBOX_API_KEY
  }
  
});
