const formater = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})

export function currencyFormater(value) {
  return formater.format(value)
}
