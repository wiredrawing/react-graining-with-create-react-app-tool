import {proxy} from  "http-proxy-middleware";

module.exports = app => {
  app.use(
    "/socket.io",
    proxy({
      target: "http://localhost:8080",
      changeOrigin: true
    })
  );
};