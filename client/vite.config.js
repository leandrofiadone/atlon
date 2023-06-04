import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import {createProxyMiddleware} from "http-proxy-middleware"

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      createProxyMiddleware("/", {
        target: "http://localhost:5173",
        changeOrigin: true
      })
    ]
  }
})
