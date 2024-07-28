const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/developer-portfolio/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/app.scss";`,
      },
    },
  },
});
