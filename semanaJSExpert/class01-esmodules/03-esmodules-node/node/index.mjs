import CurrencyManager from '../shared/currencyManager.mjs'

function updateOutput(value) {
  console.log(value)
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
input.addListener('data', inputMonitor)
