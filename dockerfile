FROM node:18-alpine3.16

RUN npm config set registry https://registry.npmmirror.com/ && npm install pnpm -g && pnpm -v

# 如果 package.json 没有变化,则使用 docker 缓存,不安装依赖
COPY package.json pnpm-lock.yaml /src/

WORKDIR /src

RUN pnpm i 

COPY . /src

RUN npm run build

EXPOSE 3002

CMD ["node", "server/index.js"]
