# Extended TypeScript Language Elements

## 1. Modules and Imports/Exports

TypeScript supports modular code:

```ts
// Exporting a function or constant
export const myConstant = 42;
export function myFunction() { ... }

// Importing from another file
import { myConstant, myFunction } from './myModule';
```

## 2. Enums

Enums allow the definition of named constants:

```ts
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;
```

## 3. Generics

Generics allow for reusable, type-safe components:

```ts
function identity<T>(arg: T): T {
  return arg;
}
const result = identity<string>('hello');
```

## 4. Type Assertions (Type Casting)

Use type assertions to inform TypeScript about the type of a value:

```ts
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;
```

## 5. Intersection & Union Types

Combine multiple types with intersection (`&`) or union (`|`) types:

```ts
type Person = { name: string };
type Employee = { id: number };
type EmployeePerson = Person & Employee; // Intersection

let individual: EmployeePerson = { name: 'Alice', id: 123 };

type StringOrNumber = string | number; // Union
```

## 6. Conditional Types

Types can be conditionally defined based on conditions:

```ts
type IsString<T> = T extends string ? true : false;
let test1: IsString<string>; // true
let test2: IsString<number>; // false
```

## 7. Utility Types

TypeScript has built-in utility types like `Partial`, `Required`, `Readonly`, etc.:

```ts
interface Person {
  name: string;
  age?: number;
}
const partialPerson: Partial<Person> = { name: 'John' }; // Makes all properties optional
```

## 8. Decorators (Experimental)

Decorators are special annotations that modify classes and methods:

```ts
function MyDecorator(target: any) {
  console.log('Decorator called');
}

@MyDecorator
class MyClass {}
```

## 9. Type Guards

Narrow down the type of a variable within a certain scope:

```ts
function isString(value: any): value is string {
  return typeof value === 'string';
}
const value: unknown = 'hello';
if (isString(value)) {
  console.log(value.length); // TypeScript knows 'value' is a string here
}
```

## 10. Mapped Types

Mapped types allow you to create new types by transforming existing ones:

```ts
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};
```

## 11. Type Inference

TypeScript can infer types automatically based on initialization:

```ts
let inferredString = 'hello'; // TypeScript infers the type as `string`
```

## 12. Namespace

Namespaces organize code in a more structured way:

```ts
namespace Utilities {
  export function log(message: string) {
    console.log(message);
  }
}
Utilities.log('Hello');
```

## 13. Tuple Types

A tuple type represents an array with a fixed number of elements:

```ts
let tuple: [string, number] = ['hello', 42];
```

## 14. Optional Chaining (?.)

Safely access deeply nested properties:

```ts
const user = { name: 'Alice', address: { street: 'Main St.' } };
const street = user?.address?.street; // Safe access to nested properties
```

## 15. Nullish Coalescing (??)

Provide a default value when the left side is `null` or `undefined`:

```ts
const value = null ?? 'default'; // "default"
```

## 16. Index Signatures

Allow dynamic keys in an object:

```ts
interface Dictionary {
  [key: string]: string;
}
const dictionary: Dictionary = { hello: 'world' };
```
