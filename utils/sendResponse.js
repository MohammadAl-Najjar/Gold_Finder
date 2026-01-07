export function sendResponse(res, contentType, statusCode, content) {
    res.statusCode = statusCode
    res.setHeader('Content-Type', contentType)
    res.end(content)
}