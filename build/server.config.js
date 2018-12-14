const webpackConfig = require("@vue/cli-service/webpack.config");
const merge = require("webpack-merge");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require("webpack-node-externals");
const resolve = require("../lib/path-resovle");

module.exports = merge(webpackConfig, {
  entry: {
    app: resolve("src/entry-server.js")
  },
  output: {
    libraryTarget: "commonjs2"
  },
  target: "node",
  plugins: [new VueSSRServerPlugin()],
  externals: nodeExternals({
    whitelist: /\.css$/
  })
});
