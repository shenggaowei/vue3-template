# 前端 vue3 模板项目

vite + vue3 + vue-router4 + ant-design-vue + scss + tailwind

node >= v18.16.0
pnpm >= 8.5.1


## 开发

```shell
pnpm install 

# 开启开发服务器，已配置热更新
pnpm dev
```
## 发布部署

```shell
# 构建
pnpm run build
```
静态资源输出到 dist 目录。

1. pm2 执行 server/index.js 脚本，部署。
2. 执行 ./boot.sh 容器化部署。默认暴露 3002 端口号。


