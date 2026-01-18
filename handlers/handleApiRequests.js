import path from 'node:path'
import { changeGoldPrice } from '../utils/goldPriceChanger.js'
import { getGoldData } from '../utils/getGoldData.js'
import { invest } from '../events/investEvent.js'
import { sendResponse } from '../utils/sendResponse.js'

export async function handleGetRequest(req, res) {
    if (req.url == '/api/gold'){
        const goldDataFilePath = path.join('data', 'goldData.json')
        let goldData = await getGoldData()
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        })
        res.write(`data: ${JSON.stringify(goldData)}\n\n`)

        setInterval(async ()=> {
            await changeGoldPrice(goldData.price, goldDataFilePath)
            goldData = await getGoldData()
            res.write(`data: ${JSON.stringify(goldData)}\n\n`)
        }, 3000)
    }
    else {
        sendResponse(res, 'application/json', 404, JSON.stringify({error: 'invalid API endpoint'}))
    }
}

export async function handlePostRequest(req, res) {
    if (req.url == '/api/addPurchase'){
        invest.emit('invest', {req,res})
    }
    else {
        sendResponse(res, 'application/json', 404, JSON.stringify({error: 'invalid API endpoint'}))
    }
}