const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const { port, proxy } = require("./config");

const app = express();

app.use(
  process.env.VITE_BASE_URL,
  express.static(path.join(__dirname, "../dist")),
);

Object.keys(proxy).map((key) => {
  app.use(key, createProxyMiddleware(proxy[key]));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
