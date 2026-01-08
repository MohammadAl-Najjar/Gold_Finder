import { EventEmitter } from 'node:events'
import { writePurchaseToFile } from '../utils/writePurchaseToFile.js'
import { sendResponse } from '../utils/sendResponse.js'

export const invest = new EventEmitter()

async function addPurchase({req, res}) {
    let purchase = ''
    req.on('data', chunk => {
        purchase += chunk.toString()
    })

    req.on('end', async () => {
        console.log(purchase)
        await writePurchaseToFile(purchase)
        sendResponse(res,'application/json',201,JSON.stringify({ purchase: 'received' }))
    })
}

invest.on('invest', addPurchase)