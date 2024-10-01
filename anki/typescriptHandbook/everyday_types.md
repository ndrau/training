# Everyday Types

TypeScript provides a set of types that are commonly used in programming. These types are essential for writing clear and maintainable code. The everyday types include:

## String

Represents text values.

Example:

```typescript
let color: string = 'blue';
let greeting: string = `Hello, ${color}`;
```

## Number

Represents all numeric values, including integers and floats.

Example:

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## Boolean

Represents a true/false value.

Example:

```typescript
let isDone: boolean = false;
```

## Array

Represents a collection of values. You can define an array with a specific type.

Example:

```typescript
let list: number[] = [1, 2, 3];
let list2: Array<string> = ['a', 'b', 'c'];
```

## Tuple

Represents an array with a fixed number of elements where each element can be of a different type.

Example:

```typescript
let x: [string, number];
x = ['hello', 10]; // Correct
```

## Any

Represents any type of value, allowing for flexibility in typing.

Example:

```typescript
let notSure: any = 4;
notSure = 'maybe a string instead';
```

## Function

Describes a function type, including the types of its parameters and return value.

```typescript
let add: (x: number, y: number) => number;
add = (x, y) => x + y;
```

## Object

Represents a non-primitive type that is not a number, string, boolean, symbol, null, or undefined.

```typescript
let user: object = {
  name: 'John',
  age: 30,
};
```

## Union Types

Allows a variable to be one of several types.

```typescript
let id: number | string;
id = 101; // valid
id = '202'; // valid
```

## Type Aliases

Creates a new name for a type using the `type` keyword.

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 'Hello';
value = 42;
```

## Interfaces

An interface declaration is another way to name an object type:

```typescript
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

## Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## Type Assertions

Allows you to override TypeScript's inferred type.

```typescript
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
```

## Literal Types

Specifies the exact value a string or number can take.

```typescript
let direction: 'left' | 'right';
direction = 'left'; // valid
direction = 'up'; // Error: Type '"up"' is not assignable to type '"left" | "right"'.
```

## Null and Undefined

Special types that can be assigned to variables.

Example:

```typescript
let u: undefined = undefined;
let n: null = null;
```

## Nullable Types

Allows a type to be null or undefined.

```typescript
let name: string | null = null;
```

## Enum

A way to give friendly names to sets of numeric values.

Example:

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

## BigInt

From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt:

```typescript
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
```

## Symbol

There is a primitive in JavaScript used to create a globally unique reference via the function Symbol():

```typescript
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}
```

## Void

Used for functions that do not return a value.

Example:

```typescript
function warnUser(): void {
  console.log('This is my warning message');
}
```

## Never

Represents values that never occur (e.g., a function that always throws an error).

Example:

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

## Intersection Types

Combines multiple types into one.

```typescript
type Person = { name: string };
type Employee = { id: number };
type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = { name: 'Alice', id: 1 };
```

## Optional Properties

Allows an object property to be optional.

```typescript
interface User {
  name: string;
  age?: number; // age is optional
}
```
