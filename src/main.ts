require('source-map-support').install() // tslint:disable-line:no-require-imports

import { createServer } from './components/server'
import {
  PORT
} from './env'

createServer(PORT)
