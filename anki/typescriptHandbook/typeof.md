
# Typeof Types

The `typeof` operator in TypeScript is used to obtain the type of a variable or property at compile time. This allows for more precise typing, particularly when dealing with dynamic types.

## 1. Basic Usage of `typeof`
You can use `typeof` to create a new type based on the type of an existing variable.
```typescript
let x = "hello";
type XType = typeof x; // XType is string
```

## 2. Using `typeof` with Object Types
`typeof` can be helpful for creating types that mirror existing object structures.
```typescript
const person = {
    name: "Alice",
    age: 30
};

type PersonType = typeof person; // PersonType is { name: string; age: number; }
```

## 3. Using `typeof` in Functions
You can use `typeof` to define parameter types in functions based on existing variables.
```typescript
let multiplier = (x: number) => x * 2;

function calculate(value: typeof multiplier) {
    return value(5);
}
```

## 4. Combining `typeof` with `keyof`
You can combine `typeof` with `keyof` to create more dynamic types that represent object keys.
```typescript
const car = {
    make: "Toyota",
    model: "Corolla"
};

type CarKeys = keyof typeof car; // "make" | "model"
```

## 5. Using `typeof` with Conditional Types
You can use `typeof` in conditional types to create more flexible and type-safe structures.
```typescript
type IsString<T> = T extends string ? "Yes" : "No";
type Result = IsString<typeof person.name>; // Result is "Yes"
```

## 6. Limitations
While `typeof` is powerful, it is important to note that it works only at compile time and not at runtime. This means it cannot dynamically evaluate types based on runtime values.

By utilizing the `typeof` operator, TypeScript enhances type safety by allowing you to create new types based on existing variables, ensuring consistency and reducing errors in your code.
