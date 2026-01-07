import http from 'node:http'
import { serveFrontEnd } from './utils/serveFrontEnd.js'

const PORT = 8000

const __dir = import.meta.dirname

const server = http.createServer((req, res) => {
    serveFrontEnd(res, req, __dir)
})

server.listen(PORT, console.log(`Listening on Port ${PORT}`))