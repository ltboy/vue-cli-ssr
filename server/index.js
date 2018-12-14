// const webpackConfig = require("../build/client.config");

// console.log(webpackConfig);
const Koa = require("koa");

const uri = `http://127.0.0.1:8080`;

const isProd = process.env.NODE_ENV !== "development";
const app = new Koa();

app.on("error", err => {
  console.log("server error", err.stack || "");
});

app.listen(8080, () => {
  console.log(uri);
});
