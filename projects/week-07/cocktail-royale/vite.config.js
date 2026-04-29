import { defineConfig, transformWithEsbuild } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true
      }
    }
  },
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!/src\/.*\.js$/.test(id)) return null
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
        })
      }
    },
    react()
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  }
})
