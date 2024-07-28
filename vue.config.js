const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    // remove it if you use it at <name>.github.io, otherwise change repo name below
    process.env.NODE_ENV === "production" ? "/developer-portfolio/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/app.scss";`,
      },
    },
  },
});
