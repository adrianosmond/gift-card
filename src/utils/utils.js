export const isOnlyNumbers = str => str.match(/^\d+$/);

export const validateGiftCardNumber = num =>
  num.length === 19 && isOnlyNumbers(num);

export const validateControlCode = code =>
  code.length === 3 && isOnlyNumbers(code);
