import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToViewport from "xy-postcss-px-to-viewport";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局样式注入
          additionalData: `@import "@/assets/css/index.scss";`
        }
      },
      postcss: {
        plugins: [
          postCssPxToViewport({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 3, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [],
            include: [
              /src\/pages\/[\s\S]*?\.?mobile\.vue/,
            ],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      }
    },
    base: './',
    build: {
      // 初始 chunk> 800，控制台警告，需手动进行分包。
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          // 自定义分割 chunks。node_modules中的每一个模块都是一个chunk
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const reg = /node_modules\/([\w\-@]+)\//
              const chunkName = id.match(reg)?.[1]
              return chunkName
            }
          }
        }
      },
    },
    server: {
      open: false,
      port: 3002,
      host: '0.0.0.0',
      hmr: true,
      proxy: {
        '/v1': env.VITE_BASE_URL
      }
    },
  }
})
