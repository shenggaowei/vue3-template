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
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // theme 文件下的 css 变量，无需导入，全局可用。
        additionalData: `@import "@/assets/css/theme.scss";`
      }
    }
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        // 自定义分割 chunks
        manualChunks(id) {
          // node_modules 单独打入名为 vendor 的 chunk 中
          if (id.includes('node_modules')) {
            return 'vendor';
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
