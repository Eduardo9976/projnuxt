export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "projnuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#fa923f", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["~/plugins/axios.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/http"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    headers: {
      Authorization: 'Bearer xu9qp8s43xiy72hlac4m1i5mtoshkpagkmhfhngx',
      'Content-Type': 'application/json'
    }
  },

  serverMiddleware: ['~/serverMiddleware/selectiveSSR.js'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
