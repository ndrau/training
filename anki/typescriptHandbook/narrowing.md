# Narrowing

Narrowing refers to the process of refining a variable's type when you have a union type. TypeScript provides various techniques to narrow types, ensuring type safety and preventing runtime errors.

## 1. Type Guards

Type guards are conditional statements that help TypeScript determine the type of a variable.

```typescript
function isString(value: any): value is string {
  return typeof value === 'string';
}

let someValue: string | number = 'Hello';
if (isString(someValue)) {
  console.log(someValue.toUpperCase()); // Valid
}
```

## 2. `typeof` Operator

The `typeof` operator can be used to narrow types based on the type of the variable.

```typescript
function example(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // Valid
  } else {
    console.log(value.toFixed(2)); // Valid for numbers
  }
}
```

## 3. `instanceof` Operator

The `instanceof` operator can check the type of an object.

```typescript
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Valid
  } else {
    animal.meow(); // Valid
  }
}
```

## 4. Discriminated Unions

A common pattern for handling multiple types where each type has a common property.

```typescript
interface Square {
  kind: 'square';
  size: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size; // Valid
    case 'circle':
      return Math.PI * shape.radius ** 2; // Valid
  }
}
```

## 5. Nullable Types

TypeScript can narrow down types when checking for `null` or `undefined`.

```typescript
function printLength(value: string | null) {
  if (value) {
    console.log(value.length); // Valid
  }
}
```

By utilizing these techniques, you can effectively narrow down types in your TypeScript code, enhancing type safety and reducing the likelihood of runtime errors.
