export function calculateDiscount(price, percent) {
  return (price * (100 - percent)) / 100;
}

export function applyTax(price, percent) {
  return price + price * percent;
}

export function calculateCartTotal(items) {
  if (items.length === 0) {
    return 0;
  }
  let total = 0;
  for (const { price, quantity } of items) {
    total += price * quantity;
  }

  return total;
}

export function validatePrice(price) {
  if (typeof price !== "number") {
    throw new Error("price must be a number");
  }

  if (price < 0) {
    throw new Error("price must be more than 0");
  }

  return true;
}

export function formatPrice(amount) {
  const result = amount.toFixed(2);
  return "₪" + result;
}

// console.log((5).toFixed(2));
