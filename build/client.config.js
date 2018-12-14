const webpackConfig = require("@vue/cli-service/webpack.config");
const merge = require("webpack-merge");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const resolve = require("../lib/path-resovle");

module.exports = merge(webpackConfig, {
  entry: {
    app: resolve("src/entry-client.js")
  },
  plugins: [new VueSSRClientPlugin()]
});
