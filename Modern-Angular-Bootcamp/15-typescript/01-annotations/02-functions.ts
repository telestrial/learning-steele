const add = (a: number, b: number): number => {
  // Typescript doesn't check our logic below, just our return type.
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void returns nothing. It can return null or undefined or literally nothing.
const logger = (message: string): void => {
  console.log(message);
};

// Never is also an option
const throwError = (message: string): never => {
  throw new Error(message);
};
