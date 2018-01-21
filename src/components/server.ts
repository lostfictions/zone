import * as express from 'express'
import * as path from 'path'


export function createServer(port: number): express.Express {
  const app = express()
  app.use(express.static(path.join(__dirname, '../../static')))

  app.get('/', (_req, res) => {
    res.status(200).end()
  })
  app.listen(port)
  return app
}
