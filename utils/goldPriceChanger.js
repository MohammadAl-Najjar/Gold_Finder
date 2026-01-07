import fs from 'node:fs/promises'

export async function changeGoldPrice(price, goldDataFilePath) {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
    await fs.writeFile(goldDataFilePath, JSON.stringify({price: price+randomNumber}))
}