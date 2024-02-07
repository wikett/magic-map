// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/404.html", "/200.html"],
    },
    compressPublicAssets: {
      brotli: true,
    },
  },
  modules: ["@pinia/nuxt", "nuxt-lodash"],
  imports: {
    dirs: ["stores"],
  },
});
