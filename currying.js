"use strict";

// Currying
// examples of currying functions

// Example 1
const multiply = (a) => {
  // console.log("1st", a);
  return (b) => {
    // console.log("2st", a, b);
    return (c) => {
      // console.log("3st", a, b, c);
      return a * b * c;
    };
  };
};

// 1st usage
multiply(1)(2)(3); // 6

// 2nd usage
const mul1 = multiply(1); // returns the second func return (b) => { ...
const mul2 = mul1(2); // returns the 3rd func return (c) => {...
const res = mul2(3); // returns the return a * b * c;
// the numbers are applied one at a time to the function
// the closure(s) are caching the previous value

res; // 6

// Example 2
const volumeCalculation = (l) => {
  return (w) => {
    return (h) => {
      return l * w * h;
    };
  };
};

// Example 3
const solveEquation = (x) => {
  return (y) => {
    return x * x + y;
  };
};

// application example
const discount = (discount) => {
  return (price) => {
    let totalDiscount = price * discount;

    return price - totalDiscount;
  };
};

// 1st
discount(0.1)(2000);

// 2nd
const tenPercentDiscount = discount(0.1);
tenPercentDiscount(2000);

// general currying functions
// takes a function as 1st arg
//
const generalCurry = (fn, ...args) => {
  return (..._args) => {
    return fn(...args, ..._args);
  };
};

module.exports = {
  multiply,
  volumeCalculation,
  solveEquation,
  discount,
  generalCurry,
};
