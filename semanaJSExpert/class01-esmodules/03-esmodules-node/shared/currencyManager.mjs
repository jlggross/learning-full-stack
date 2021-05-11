const currencyFormat = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

export default class CurrencyManager {
  static format(value) {
    return currencyFormat.format(value)
  }
}
