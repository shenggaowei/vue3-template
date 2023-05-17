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
  base: '.',
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
  }
})
