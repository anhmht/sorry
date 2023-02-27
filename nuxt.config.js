import fs from "fs";
import path from "path";

export default {
  // server: {
  //   port: process.env.NUXT_PORT,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, ".ssl/localhost.key")),
  //     cert: fs.readFileSync(path.resolve(__dirname, ".ssl/localhost.crt")),
  //   },
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my-apology-website",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.2/css/all.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
    },
    extend(config, { isClient }) {
      if (isClient) {
        // Add file-loader or url-loader rule for audio files
        config.module.rules.push({
          test: /\.(mp3)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "audio/",
          },
        });
      }
    },
  },
  generate: {
    dir: "dist",
  },
  router: {
    base: "/",
  },
};
