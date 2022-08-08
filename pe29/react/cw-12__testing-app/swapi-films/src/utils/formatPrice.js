const DOLLAR_CURRENCY = '$'
const ALLOWED_CURRENCY = [DOLLAR_CURRENCY, '€', '₴']

const formatPrice = (price, currency = DOLLAR_CURRENCY) => {
    const priceCurrency = ALLOWED_CURRENCY.includes(currency) ? currency : DOLLAR_CURRENCY
    return `${priceCurrency} ${price.toFixed(2)}`
}

export default formatPrice