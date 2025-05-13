const formater = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
});

export function currencyFormater(value) {
  return formater.format(value);
}
