import path from 'node:path'
import { getContentType } from './getContentType.js'
import fs from 'node:fs/promises'

export async function serveFrontEnd(res, req, baseDir) {
    try {
        if (req.method == 'GET'){
            const publicPath = path.join(baseDir, 'public')
            const requestPath = path.join(publicPath, req.url == '/' ? 'index.html' : req.url)
            const fileExt = path.extname(requestPath)
            res.statusCode = 200
            res.setHeader('Content-Type', getContentType(fileExt))
            const content = await fs.readFile(requestPath)
            res.end(content)
        }
    } catch (err){
        console.log(err)
    }
}