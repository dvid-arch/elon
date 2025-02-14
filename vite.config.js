import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { Buffer } from 'node:buffer';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig(  {
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),

  ],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
  },
  server: {
    historyApiFallback: true, // Ensures React Router works
  },
  define: {
    // Ensure that any reference to global.Buffer in dependencies resolves correctly.
    'global.Buffer': JSON.stringify(Buffer),
    'process.env': {}, // In case some modules check process.env
    global: 'window'   // This makes references to global point to window
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
        'global.Buffer': 'Buffer',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  resolve: {
    alias: {
      process: "process/browser",
      // Optionally, alias 'buffer' so that modules resolving it get the correct package.
      // buffer: 'node:buffer',
    },
  },
})
