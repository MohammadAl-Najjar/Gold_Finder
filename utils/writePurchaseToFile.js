import fs from 'node:fs/promises'
import path from 'node:path'

export async function writePurchaseToFile(purchase) {
    const textPath = path.join('data', 'purchases.txt')
    await fs.appendFile(textPath, `${purchase}\n`)
}