import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
 
export default defineConfig({
  plugins: [
    Vue({
      script: {
        defineModel: true
      }
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'Vicius',
      fileName: 'vicius'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
