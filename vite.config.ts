/// <reference types="vitest/config" />
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite' // Tailwind v4 plugin
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },

  // 🔽 DS library build: JS components + CSS entries
  build: {
    lib: {
      // JS entry that re-exports your components (e.g. Button)
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      // extra inputs so CSS is emitted with stable names
      input: {
        index: path.resolve(__dirname, 'src/index.ts'), // JS components entry
        theme: path.resolve(__dirname, 'src/styles/theme.css') // Tailwind v4 theme (utilities)
      },
      output: {
        assetFileNames: (asset) =>
          asset.name?.endsWith('.css')
            ? '[name][extname]' // -> theme.css / tokens.css / styles.css
            : 'assets/[name]-[hash][extname]'
      }
    },
    cssCodeSplit: true
  },

  // your existing test setup (unchanged)
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
})
