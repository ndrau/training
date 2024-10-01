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

## Nullable Types

Allows a type to be null or undefined.

```typescript
let name: string | null = null;
```

## Optional Properties

Allows an object property to be optional.

```typescript
interface User {
  name: string;
  age?: number; // age is optional
}
```

These everyday types enable you to leverage TypeScript's type system to build more robust and error-resistant applications.
