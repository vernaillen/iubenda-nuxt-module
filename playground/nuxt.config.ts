export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxt/devtools'
  ],
  iubenda: {
    config: {
      siteId: 1,
      cookiePolicyId: 1
    },
  },
})
