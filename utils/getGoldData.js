import fs from 'node:fs/promises'
import path from 'node:path'

export async function getGoldData() {
    const goldDataFilePath = path.join('data', 'goldData.json')
    const rawGoldData = await fs.readFile(goldDataFilePath, 'utf8')
    const parsedGoldData = JSON.parse(rawGoldData)
    return parsedGoldData
}