import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  calculateDiscount,
  applyTax,
  calculateCartTotal,
  validatePrice,
  formatPrice,
} from "./store-calc.js";

describe("calculateDiscount", () => {
  it("get 20% and returns 20% discount", () => {
    assert.strictEqual(calculateDiscount(100, 20), 80);
  });

  it("get 0 and return the same price", () => {
    assert.strictEqual(calculateDiscount(100, 0), 100);
  });

  it("get 0 for price and 50% discount and returns 0", () => {
    assert.strictEqual(calculateDiscount(0, 50), 0);
  });

  it("get int and returns float", () => {
    assert.strictEqual(calculateDiscount(100, 50.5), 49.5);
  });
});

describe("applyTax", () => {
  it("get price and return it with 17% tax", () => {
    assert.strictEqual(applyTax(100, 0.17), 117);
  });

  it("get price and 0% for tax and returns the price", () => {
    assert.strictEqual(applyTax(100, 0), 100);
  });

  it("get 0 for price and return 0", () => {
    assert.strictEqual(applyTax(0, 0.17), 0);
  });

  it("get price with some tax percent and return the correct price", () => {
    assert.strictEqual(applyTax(100, 0.1), 110);
  });
});

describe("calculateCartTotal", () => {
  it("returns total cart of the arr", () => {
    const items = [
      { price: 10, quantity: 10 },
      { price: 15, quantity: 4 },
    ];
    assert.strictEqual(calculateCartTotal(items), 160);
  });

  it("get one item", () => {
    const oneItem = [{ price: 10, quantity: 10 }];
    assert.strictEqual(calculateCartTotal(oneItem), 100);
  });

  it("get empty arr and return 0", () => {
    assert.strictEqual(calculateCartTotal([]), 0);
  });

  it("get item witout quantity", () => {
    const itemList = [
      { price: 10, quantity: 10 },
      { price: 15, quantity: 0 },
    ];
    assert.strictEqual(calculateCartTotal(itemList), 100);
  });
});

describe("validatePrice", () => {
  it("get not-number and throw an Error", () => {
    assert.throws(() => {
      (validatePrice("abc"), /price must be a number/);
    });
  });

  it("get negative price and throw an Error", () => {
    assert.throws(() => {
      (validatePrice(-5), /price must be more than 0/);
    });
  });

  it("get 0 for price and return true", () => {
    assert.strictEqual(validatePrice(0), true);
  });

  it("get regular price and return true", () => {
    assert.strictEqual(validatePrice(100), true);
  });
});

describe("formatPrice", () => {
  it("add sheqel sign and 2 digits", () => {
    assert.equal(formatPrice(49.9), "₪49.90");
  });

  it("get int and return float", () => {
    assert.equal(formatPrice(100), "₪100.00");
  });

  it("get 0 and return float with sheqel sign", () => {
    assert.equal(formatPrice(0), "₪0.00");
  });

  it("round to 2 numbers after the point", () => {
    assert.equal(formatPrice(19.999), "₪20.00");
  });
});
