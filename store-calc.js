export function calculateDiscount(price, percent) {
  return (price * (100 - percent)) / 100;
}

export function applyTax(price, percent) {}

export function calculateCartTotal(items) {}

export function validatePrice(price) {}

export function formatPrice(amount) {}

console.log(calculateDiscount(100, 20));
