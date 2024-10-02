# Conditional Types

Conditional types in TypeScript allow you to define types based on a condition, enhancing type flexibility and expressiveness. They are particularly useful for creating types that depend on the relationship between types.

## 1. Basic Syntax

The basic syntax for a conditional type is `T extends U ? X : Y`, where:

- `T` is the type to check.
- `U` is the type it is compared against.
- If `T` extends `U`, the type evaluates to `X`; otherwise, it evaluates to `Y`.

```typescript
type IsString<T> = T extends string ? 'Yes' : 'No';

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"
```

## 2. Conditional Types with Unions

Conditional types can work with union types, applying the condition to each member of the union.

```typescript
type ValueType<T> = T extends string ? string : number;

type Result = ValueType<string | number>; // string | number
```

## 3. Distributive Conditional Types

When a conditional type is applied to a union, it distributes the type across the union.

```typescript
type IsString<T> = T extends string ? 'Yes' : 'No';

type Result = IsString<string | number>; // "Yes" | "No"
```

## 4. Using `infer` in Conditional Types

The `infer` keyword can be used to infer types within conditional types, allowing you to create more complex and powerful type definitions.

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = () => string;
type Result = ReturnType<Func>; // string
```

## 5. Nested Conditional Types

You can nest conditional types for more advanced type checks.

```typescript
type Message<T> = T extends string
  ? "It's a string!"
  : T extends number
  ? "It's a number!"
  : 'Unknown type';

type Test1 = Message<string>; // "It's a string!"
type Test2 = Message<number>; // "It's a number!"
```

## 6. Practical Use Cases

Conditional types are useful in various scenarios, such as:

- Creating utility types (e.g., `ReturnType`, `Exclude`, `Extract`).
- Implementing type transformations based on input types.
- Improving type inference and safety in function signatures.

By leveraging conditional types, TypeScript allows you to create dynamic, flexible, and type-safe code, enhancing the overall maintainability of your applications.
