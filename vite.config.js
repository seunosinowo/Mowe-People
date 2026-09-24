import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    writeBundle() {
      const src = path.resolve(__dirname, 'assets')
      const dest = path.resolve(__dirname, 'dist', 'assets')
      if (fs.existsSync(src)) {
        fs.mkdirSync(dest, { recursive: true })
        fs.cpSync(src, dest, { recursive: true })
      }
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/assets/')) {
          const filePath = path.resolve(__dirname, req.url.slice(1))
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath).toLowerCase()
            const types = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
            }
            res.setHeader('Content-Type', types[ext] || 'application/octet-stream')
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  server: {
    port: 5173,
  },
})
