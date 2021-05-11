;(() => {
  const currencyFormat = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  class CurrencyManager {
    static format(value) {
      return currencyFormat.format(value)
    }
  }

  // 'window' is a global variable, than we can use it anywhere in the project
  window.CurrencyManager = CurrencyManager
})()
