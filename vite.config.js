import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  envDir:'env',//更换env目录
  envPrefix:'VIHI_',//更换前缀
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    }
  }
})
