// 1. Literals: Direct values written in the code
const numLiteral: number = 42; // Numeric literal
const strLiteral: string = 'Hello'; // String literal
const boolLiteral: boolean = true; // Boolean literal
const objLiteral = { key: 'value' }; // Object literal
const arrLiteral: number[] = [1, 2, 3]; // Array literal

// 2. Expressions: Any valid unit of code that resolves to a value
const sumExpression = 5 + 3; // Arithmetic expression
const greetingExpression = `Hello, ${strLiteral}`; // Template literal expression
const logicExpression = boolLiteral && numLiteral > 40; // Logical expression

// 3. Statements: Perform actions
if (numLiteral > 40) {
  console.log('Number is greater than 40'); // Control flow statement
}

for (let i = 0; i < arrLiteral.length; i++) {
  console.log(arrLiteral[i]); // Loop statement
}

// 4. Declarations: Define variables, functions, or types
let declaredVariable: number = 10; // Variable declaration
const declaredConstant: string = 'constant value'; // Constant declaration

function declaredFunction(a: number, b: number): number {
  // Function declaration
  return a + b;
}

type DeclaredType = { name: string; age: number }; // Type alias declaration

// 5. Functions: Reusable blocks of code
function multiply(a: number, b: number): number {
  // Function declaration
  return a * b;
}

const arrowFunction = (a: number, b: number): number => a + b; // Arrow function (anonymous)

// 6. Types: Define the structure of values
const userName: string = 'Alice'; // Primitive type
const userAge: number = 30; // Primitive type

const user: { name: string; age: number } = {
  // Object type
  name: userName,
  age: userAge,
};

// 7. Variables and Constants: Store values
let variableNum: number = 100; // Variable that can be reassigned
const constantValue: string = 'I am constant'; // Constant value, cannot be reassigned

// 8. Operators: Symbols that perform operations
const sum = 10 + 20; // Arithmetic operator
const isTrue = numLiteral > 20 && boolLiteral; // Logical and comparison operators
variableNum += 10; // Assignment operator

// 9. Keywords: Reserved words in TypeScript
if (isTrue) {
  // 'if' is a keyword for conditional branching
  console.log('Condition is true');
}

class Animal {
  // 'class' is a keyword to define classes
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 10. Classes and Interfaces: Define structures and behaviors of objects
class Dog extends Animal {
  // Class that extends another class
  breed: string;
  constructor(name: string, breed: string) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }
}

interface Person {
  // Interface defining a structure for an object
  name: string;
  age: number;
}

const person: Person = {
  // Using an interface to type an object
  name: 'John',
  age: 25,
};
