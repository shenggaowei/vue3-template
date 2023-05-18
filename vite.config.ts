import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
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
        // theme 文件下的 css 变量，覆盖 element-plus 组件样式，无需导入，全局可用。
        additionalData: `@import "@/assets/css/theme.scss";`
      }
    }
  },
  base: './',
  build: {
    // 初始 chunk>500k，控制台警告，需手动进行分包。
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // 自定义分割 chunks，node_modules中的每一个模块都是一个chunk
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
      '/v1': 'http://172.16.0.12:8080'
    }
  },
})
