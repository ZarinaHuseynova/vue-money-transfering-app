const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  process.env.NODE_ENV === "production" ? "/vue-money-transfering-app/" : "/",
});
