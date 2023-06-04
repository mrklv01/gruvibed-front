const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
    images: {
      domains: [
"https://gruvibed-back.herokuapp.com/",
"https://gruvibed-back.herokuapp.com/api",
"gruvibed-back.herokuapp.com/",
"gruvibed-back.herokuapp.com/api"
      ],
    }
  }
});

module.exports = nextjsServer;
