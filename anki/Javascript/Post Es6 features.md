
# Important JavaScript Features (Post-ES6)

## 1. Async/Await

Simplified syntax for working with promises:

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

## 2. Array Methods

New array methods for improved functionality:

- **Array.prototype.includes()**

```js
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
```

- **Array.prototype.flat()**

```js
const nestedArray = [1, [2, [3]]];
const flatArray = nestedArray.flat(2); // [1, 2, 3]
```

- **Array.prototype.flatMap()**

```js
const mappedArray = arr.flatMap(x => [x * 2]); // [2, 4, 6]
```

## 3. Object.entries() and Object.values()

Methods to get entries and values of an object:

```js
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
console.log(Object.values(obj)); // [1, 2]
```

## 4. Optional Chaining (?.)

A way to access deeply nested properties safely:

```js
const user = { profile: { name: 'Alice' } };
console.log(user.profile?.name); // 'Alice'
console.log(user.settings?.theme); // undefined
```

## 5. Nullish Coalescing (??)

A logical operator that returns the right-hand operand when the left-hand operand is `null` or `undefined`:

```js
const value = null;
const defaultValue = value ?? 'default'; // 'default'
```

## 6. Dynamic Imports

Importing modules dynamically:

```js
async function loadModule() {
  const module = await import('./module.js');
  module.doSomething();
}
```

## 7. WeakRefs and FinalizationRegistry

Managing memory and garbage collection more effectively:

```js
const weakRef = new WeakRef(object);
const finalizationRegistry = new FinalizationRegistry((heldValue) => {
  console.log(`${heldValue} has been garbage collected`);
});
```

## 8. BigInt

A new primitive type for handling large integers:

```js
const bigIntValue = BigInt(1234567890123456789012345678901234567890);
```

## 9. String.prototype.matchAll()

A method for getting all matches of a regular expression in a string:

```js
const regex = /[a-z]+/g;
const str = 'Hello world!';
const matches = [...str.matchAll(regex)]; // [['ello'], ['world']]
```

## 10. Promise.allSettled()

A method that returns a promise that resolves when all promises have settled:

```js
const promises = [Promise.resolve(1), Promise.reject('error')];
Promise.allSettled(promises).then(results => {
  console.log(results); // [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'error'}]
});
```

## 11. Intl.RelativeTimeFormat

A built-in object for formatting relative time:

```js
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day')); // "yesterday"
```

## 12. `import.meta`

An object containing metadata about the module:

```js
console.log(import.meta.url); // URL of the current module
```

## 13. Promise.any()

A method that resolves as soon as one of the promises in the iterable fulfills:

```js
const promises = [Promise.reject('error'), Promise.resolve(3)];
Promise.any(promises).then(value => {
  console.log(value); // 3
});
```

## 14. `finalizationRegistry`

Allows you to register a cleanup callback that runs when an object is garbage collected:

```js
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`${heldValue} has been garbage collected`);
});
```

## 15. Logical Assignment Operators

Combines logical operators with assignment:

```js
let x = 1;
x ||= 2; // x = x || 2
x &&= 2; // x = x && 2
x ??= 2; // x = x ?? 2
```

