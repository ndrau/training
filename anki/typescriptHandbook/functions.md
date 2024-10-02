# Functions

Functions in TypeScript can be defined with specific types for parameters and return values. This allows for better type checking and ensures the correctness of your code.

## 1. Function Types

You can define the types of parameters and the return type of a function.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

## 2. Optional Parameters

You can specify that a parameter is optional by adding a `?` after its name.

```typescript
function multiply(x: number, y?: number): number {
  return y ? x * y : x; // y is optional
}
```

## 3. Default Parameters

You can provide default values for parameters.

```typescript
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}
```

## 4. Rest Parameters

Allows you to pass an indefinite number of arguments as an array.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

## 5. Function Overloads

You can define multiple signatures for a single function.

```typescript
function format(value: number): string;
function format(value: string): string;
function format(value: any): string {
  return typeof value === 'string' ? value : value.toString();
}
```

## 6. `this` Parameter

Specifies the type of `this` within a function.

```typescript
interface Counter {
  count: number;
  increment(this: Counter): void;
}

const counter: Counter = {
  count: 0,
  increment() {
    this.count++;
  },
};
```

By using these function features, TypeScript helps you write clearer and more maintainable code, reducing the chances of bugs related to incorrect parameter types and return values.
