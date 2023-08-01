const path = require("path");
const fs = require("fs");
const dotEnv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV;
const appDir = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

// 获取当前环境的 .env 文件路径。例如 development 为 .env/.env.development
const envDir = resolveApp(`env/.env.${NODE_ENV}`);

// 将 .env 变量添加到 process.env 中
dotEnv.config({ path: envDir });

module.exports = {
    port: process.env.PORT,
    proxy: {
        "/gw/v1": {
            target: process.env.VITE_FETCH_BASE_URL,
            ws: false,
        },
    },
};
