import http from 'node:http'
import { serveFrontEnd } from './utils/serveFrontEnd.js'
import { sendResponse } from './utils/sendResponse.js'
import { handleGetRequest, handlePostRequest } from './handlers/handleApiRequests.js'

const PORT = 8000

const __dir = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/api')) {
        if (req.method == 'GET') {
            await handleGetRequest(req, res)
        }
        else if (req.method == 'POST') {
            await handlePostRequest(req, res)
        }
    }

    else if (!req.url.startsWith('/api')) serveFrontEnd(res, req, __dir)

    else {
        sendResponse(res, 'application/json', 400, JSON.stringify({error : 'No such API endpoint.'}))
    }
})

server.listen(PORT, console.log(`Listening on Port ${PORT}`))