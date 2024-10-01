# Important JavaScript Features (Pre-ES6)

## 1. Variables

Declaring variables using `var`:

```js
var name = 'Alice'; // Function-scoped variable
```

## 2. Data Types

Primitive data types:

```js
let str = 'Hello'; // String
let num = 42; // Number
let isTrue = true; // Boolean
let undefined; // Undefined
let n = null; // Null
```

## 3. Functions

Declaring functions in different ways:

```js
function add(a, b) {
  return a + b; // Function declaration
}

const multiply = function (a, b) {
  return a * b; // Function expression
};

const square = (x) => x * x; // Arrow function
```

## 4. Conditionals

Using `if`, `else if`, and `else` statements:

```js
if (num > 0) {
  console.log('Positive number');
} else if (num < 0) {
  console.log('Negative number');
} else {
  console.log('Zero');
}
```

## 5. Loops

Iterating over arrays or objects:

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // For loop
}

const arr = [1, 2, 3];
arr.forEach((item) => console.log(item)); // ForEach loop

for (let item of arr) {
  console.log(item); // For...of loop
}

for (let key in obj) {
  console.log(key, obj[key]); // For...in loop
}
```

## 6. Arrays

Creating and manipulating arrays:

```js
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date'); // Add an element
const firstFruit = fruits[0]; // Access an element
const fruitCount = fruits.length; // Get length of the array
```

## 7. Objects

Creating and using objects:

```js
const person = {
  name: 'John',
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};
```

## 8. JSON

Working with JSON data:

```js
const jsonString = '{"name": "Alice", "age": 25}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
const backToJson = JSON.stringify(jsonObject); // Convert object to JSON string
```

## 9. Error Handling

Using try-catch for error handling:

```js
try {
  // Code that may throw an error
  throw new Error('Something went wrong!');
} catch (error) {
  console.log(error.message); // Catch the error
}
```

## 10. Event Handling

Handling events in the DOM:

```js
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button was clicked!');
});
```

## 11. The `this` Keyword

Understanding the context of `this`:

```js
const obj = {
  value: 42,
  getValue: function () {
    return this.value; // `this` refers to the obj
  },
};
```

## 12. Scope

Understanding variable scope:

```js
var globalVar = 'I am global'; // Global scope

function example() {
  var localVar = 'I am local'; // Function scope
}
```

## 13. Hoisting

Variable and function hoisting in JavaScript:

```js
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';
```

## 14. Closures

Functions retaining access to their outer scope:

```js
function outerFunction() {
  let outerVar = 'I am outside!';
  return function innerFunction() {
    console.log(outerVar); // Access outer variable
  };
}
const innerFunc = outerFunction();
innerFunc(); // I am outside!
```

## 15. Prototypes

Understanding prototype-based inheritance:

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

const dog = new Animal('Dog');
console.log(dog.speak()); // Dog makes a noise.
```
