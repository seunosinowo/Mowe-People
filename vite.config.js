import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { loadEnv } from 'vite'

function localApiPlugin() {
  let mode = 'development'
  return {
    name: 'local-api-functions',
    configResolved(config) {
      mode = config.mode
    },
    async configureServer(server) {
      const env = loadEnv(mode, process.cwd(), '')
      for (const [key, value] of Object.entries(env)) process.env[key] ??= value
      const { default: eventRegistration } = await import('./api/event-registration.js')

      server.middlewares.use('/api/event-registration', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        let body = ''
        for await (const chunk of req) body += chunk
        try {
          req.body = body ? JSON.parse(body) : {}
        } catch {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Invalid request body.' }))
          return
        }

        res.status = (statusCode) => { res.statusCode = statusCode; return res }
        res.json = (payload) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
          return res
        }
        await eventRegistration(req, res)
      })
    },
  }
}

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
  plugins: [react(), copyAssetsPlugin(), localApiPlugin()],
  server: {
    port: 5173,
  },
})
