const path = require("path");
module.exports = function pathResolve(file) {
  return path.resolve(__dirname, "..", file);
};
