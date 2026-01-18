const es = new EventSource('/api/gold')
const priceDisplayEl = document.getElementById('price-display')
const investBtn = document.getElementById('invest-btn')
const dialog = document.querySelector('.outputs')
const closeDialogBtn = document.getElementById('close-dialog-btn')
const moneySpentEl = document.getElementById('money-spent')
const goldAmountEl = document.getElementById('gold-amount')
const investmentAmountField = document.getElementById('investment-amount')
let currentGoldPrice = 0


es.onmessage = (e) => {
  currentGoldPrice = JSON.parse(e.data).price
  priceDisplayEl.innerText = currentGoldPrice
}

investBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (investmentAmountField.value){
    const investmentAmount = investmentAmountField.value
    const date = new Date()
    fetch('/api/addPurchase', {
      method: 'POST',
      headers: {
        'Content-Type' : 'text/plain'
      },
      body: `${date}, amount paid: $${investmentAmount}, price per Oz: $${currentGoldPrice}, gold sold: ${investmentAmount/currentGoldPrice} Oz`
    })
    moneySpentEl.textContent = investmentAmount
    goldAmountEl.textContent = (investmentAmount/currentGoldPrice).toFixed(4)
    dialog.showModal()
  }
})

closeDialogBtn.addEventListener('click', (e) => {
  e.preventDefault()
  dialog.close()
})