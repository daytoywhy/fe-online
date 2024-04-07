import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import {resolve } from 'path'
export default defineConfig({
  build:{
    outDir:'dist',

  },
  plugins:[createVuePlugin()],
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src')
    }
  }
})