const BASE_URL = process.env.BASE_URL || `http://172.30.115.12:8888`;
module.exports = {
  port: 3002,
  proxy: {
    "/v1": {
      target: BASE_URL,
      ws: false,
    },
  },
};
