// const resolve = require("./lib/path-resovle");
// const isProd = process.env.NODE_ENV === "production";

module.exports = {
  baseUrl: "/",
  configureWebpack: {
    mode: process.env.NODE_ENV || "production"
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        return {
          ...options,
          optimizeSSR: false
        };
      });
  }
};
