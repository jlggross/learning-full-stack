// CommonJS

const CurrencyManager = require('shared/currencyManager')

function updateOutput(value) {
  console.log(value)
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
console.log('Typing...')
input.addListener('data', inputMonitor)
