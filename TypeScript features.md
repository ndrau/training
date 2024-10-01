
# Important TypeScript Features

## 1. Type Annotations

Specifying types for variables, function parameters, and return types:

```ts
let num: number = 42;
let str: string = 'Hello';
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## 2. Interfaces

Defining custom types with interfaces:

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = { name: 'Alice', age: 25 };
```

## 3. Classes

Enhanced class features with access modifiers and interfaces:

```ts
class Animal {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public speak(): string {
    return `${this.name} makes a noise.`;
  }
}
```

## 4. Enums

Defining a set of named constants:

```ts
enum Color {
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Green;
```

## 5. Union Types

Allowing a variable to be one of several types:

```ts
let value: number | string;
value = 42; // valid
value = 'Hello'; // valid
```

## 6. Type Aliases

Creating a new name for a type:

```ts
type StringOrNumber = string | number;
let id: StringOrNumber = '123';
```

## 7. Tuples

Defining arrays with fixed sizes and types:

```ts
let tuple: [string, number] = ['Alice', 25];
```

## 8. Generics

Creating reusable components that can work with any data type:

```ts
function identity<T>(arg: T): T {
  return arg;
}
const output = identity<string>('Hello');
```

## 9. Type Assertions

Explicitly specifying the type of a variable:

```ts
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length; // Type assertion
```

## 10. Optional Properties

Defining optional properties in interfaces:

```ts
interface User {
  name: string;
  age?: number; // optional property
}
```

## 11. Readonly Properties

Defining properties that cannot be modified:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 10, y: 20 };
// p.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
```

## 12. `never` Type

Indicating a function that never returns:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

## 13. `any` Type

Bypassing type checking (use with caution):

```ts
let variable: any = 5;
variable = 'Now I am a string';
```

## 14. Namespace

Grouping related types, interfaces, and functions:

```ts
namespace Geometry {
  export interface Shape {
    area(): number;
  }

  export class Circle implements Shape {
    constructor(public radius: number) {}
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
}
```

## 15. Decorators

Annotations and a meta-programming syntax for class declarations and members:

```ts
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }
}
```

