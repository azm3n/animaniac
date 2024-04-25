/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/animaniac/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
  },
})
