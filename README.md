****# 前端 vue3 模板项目

vite + vue3 + vue-router4 + ant-design-vue + scss + tailwind

node >= v18.16.0
pnpm >= 8.5.1


## 开发

```shell
pnpm install 

# 开启开发服务器，已配置热更新
pnpm dev
```

## 关于接口跨域请求

本地开发，使用 vite server 服务代理转发。vite.config.ts 中 sever 配置。

测试环境，项目由 pm2 在后台启动 node 服务，使用 `http-proxy-middleware` 转发代理。server/config 中配置。

生产环境，配置方式与测试环境一致。

## 测试环境部署

访问地址: http://182.92.4.3:3300

服务器项目目录： /home/fenghe/guanwang/guanwang-admin-web

```shell

# 服务器上安装 pm2，如果已安装可忽略此步骤
sudo npm install pm2 -g

# 安装依赖
pnpm install

# 打包构建文件至 dist 目录
pnpm run build:test

# 环境变量 NODE_ENV 设置为 test
export NODE_ENV=test

# 启动 node 后台进程服务。 pm2 list 查看如果已经启动可忽略此步
sudo pm2 start server/index.js --name summitsum.com-admin
```

## 生产环境部署

访问地址: http://summitsum.com/admin6

服务器项目目录： /home/fenghe/summitsum.com/guanwang-admin-web

```shell

# 服务器上安装 pm2，如果已安装可忽略此步骤
sudo npm install pm2 -g

# 安装依赖
pnpm install

# 打包构建文件至 dist 目录
pnpm build

# 环境变量 NODE_ENV 设置为 production
export NODE_ENV=production

# 启动 node 后台进程服务，默认开启 3003 端口。 pm2 list 查看如果已经启动可忽略此步
sudo pm2 start server/index.js --name summitsum.com-admin
```
