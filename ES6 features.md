
# ES6 Features

## 1. Let and Const

Block-scoped variable declarations:

```js
let mutableVariable = 'I can be changed';
const immutableVariable = 'I cannot be changed';
```

## 2. Arrow Functions

Shorter syntax for writing functions:

```js
const add = (a, b) => a + b;
const square = x => x * x;
```

## 3. Template Literals

String literals allowing embedded expressions:

```js
const name = 'John';
const greeting = `Hello, ${name}!`;
```

## 4. Destructuring Assignment

Unpacking values from arrays or properties from objects:

```js
const arr = [1, 2, 3];
const [first, second] = arr; // Array destructuring

const obj = { a: 1, b: 2 };
const { a, b } = obj; // Object destructuring
```

## 5. Default Parameters

Setting default values for function parameters:

```js
function multiply(a, b = 1) {
  return a * b;
}
```

## 6. Rest and Spread Operators

Collecting and spreading elements:

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // Rest operator
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // Spread operator
```

## 7. Classes

Creating objects with classes:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
}
```

## 8. Modules

Exporting and importing modules:

```js
// myModule.js
export const pi = 3.14;
export function calculateArea(radius) {
  return pi * radius * radius;
}

// main.js
import { pi, calculateArea } from './myModule.js';
```

## 9. Promises

Representing the eventual completion (or failure) of an asynchronous operation:

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Operation succeeded!');
  } else {
    reject('Operation failed.');
  }
});
```

## 10. Symbol

A new primitive data type used for unique identifiers:

```js
const uniqueId = Symbol('id');
```

## 11. Iterators and Generators

Creating custom iteration behavior:

```js
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();
console.log(gen.next()); // { value: 1, done: false }
```

## 12. Map and Set

Collection types for storing unique values or key-value pairs:

```js
const myMap = new Map();
myMap.set('key', 'value');
const mySet = new Set([1, 2, 3, 3]);
```

## 13. WeakMap and WeakSet

Collections for holding weak references to objects:

```js
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'some value');

const weakSet = new WeakSet();
weakSet.add(obj);
```

## 14. String Methods

New methods for string manipulation:

```js
const str = 'Hello, World!';
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('!')); // true
console.log(str.includes('World')); // true
```

## 15. Object Methods

New methods for working with objects:

```js
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj); // [[ 'a', 1 ], [ 'b', 2 ]]
const values = Object.values(obj); // [ 1, 2 ]
```
