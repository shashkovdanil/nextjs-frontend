import express, { Request, Response } from 'express'
import next from 'next'
import proxyMiddleware from 'http-proxy-middleware'

interface DevProxy {
  [url: string]: {
    target: string
    pathRewrite: {
      [path: string]: string
    }
    changeOrigin: boolean
  }
}

const devProxy: DevProxy = {
  '/api': {
    target: 'https://api.url/api/', // Set up your API URL
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app
  .prepare()
  .then(async () => {
    const server = express()

    if (dev && devProxy) {
      Object.keys(devProxy).forEach((ctx: string) => {
        server.use(proxyMiddleware(ctx, devProxy[ctx]))
      })
    }

    server.get('*', (req: Request, res: Response) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
