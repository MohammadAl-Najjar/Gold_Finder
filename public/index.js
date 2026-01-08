const es = new EventSource('/api/gold')
const priceDisplayEl = document.getElementById('price-display')
const investBtn = document.getElementById('invest-btn')
let currentGoldPrice = 0


es.onmessage = (e) => {
  currentGoldPrice = JSON.parse(e.data).price
  priceDisplayEl.innerText = currentGoldPrice
}

investBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const investmentAmount = document.getElementById('investment-amount').value
  const date = new Date()
  fetch('/api/addPurchase', {
    method: 'POST',
    headers: {
      'Content-Type' : 'text/plain'
    },
    body: `${date}, amount paid: $${investmentAmount}, price per Oz: $${currentGoldPrice}, gold sold: ${investmentAmount/currentGoldPrice} Oz`
  })
})

