import path from 'node:path'
import { getContentType } from './getContentType.js'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveFrontEnd(res, req, baseDir) {
    const publicPath = path.join(baseDir, 'public')
    try {
        // get path for requested file
        const requestPath = path.join(publicPath, req.url == '/' ? 'index.html' : req.url)
        const fileExt = path.extname(requestPath)
        // send response with content
        const content = await fs.readFile(requestPath)
        sendResponse(res, getContentType(fileExt), 200, content)
    } catch (err){
        console.log(err)
        const notFoundPage = path.join(publicPath, '404.html')
        const content = await fs.readFile(notFoundPage)
        sendResponse(res, 'text/html', 404, content)
    }
}