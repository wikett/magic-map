// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/**": { isr: true },
    "/api/**": { isr: false },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/404.html", "/200.html"],
    },
    compressPublicAssets: {
      brotli: true,
    },
  },
  modules: ["@pinia/nuxt", "nuxt-lodash", "@nuxt/image","@nuxt/ui"],
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
  }
});
