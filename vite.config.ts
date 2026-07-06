import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@features': resolve(__dirname, 'src/features'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@context': resolve(__dirname, 'src/context'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@app-types': resolve(__dirname, 'src/types'),
      '@i18n': resolve(__dirname, 'src/i18n'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    globals: true,
  },
})
