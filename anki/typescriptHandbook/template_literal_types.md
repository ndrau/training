
# Template Literal Types

Template literal types in TypeScript allow you to create string literal types using template string syntax. This feature enables more dynamic and expressive type definitions, particularly when working with string manipulation.

## 1. Basic Usage
You can create a template literal type by combining string literals with placeholders.
```typescript
type Greeting = `Hello, ${string}`; // Any string that starts with "Hello, "
```

## 2. Combining Literal Types
You can combine multiple literal types using template literals.
```typescript
type Direction = 'left' | 'right';
type Movement = `move ${Direction}`; // "move left" | "move right"
```

## 3. Creating Dynamic Strings
Template literal types allow you to define dynamic strings based on other types.
```typescript
type UserRole = 'admin' | 'user';
type UserMessage = `Welcome, ${UserRole}!`; // "Welcome, admin!" | "Welcome, user!"
```

## 4. Using Template Literal Types with Mapped Types
You can use template literal types in combination with mapped types to create more complex types.
```typescript
type Prefix = 'user' | 'admin';
type UserPrefixMap = {
    [K in Prefix]: `prefix_${K}`;
};

type Result = UserPrefixMap; // { user: "prefix_user"; admin: "prefix_admin"; }
```

## 5. Conditional Types with Template Literals
Template literal types can be combined with conditional types for advanced type manipulations.
```typescript
type IsAdmin<T> = T extends `admin_${infer R}` ? R : never;

type Result1 = IsAdmin<`admin_John`>; // "John"
type Result2 = IsAdmin<`user_Jane`>; // never
```

## 6. Practical Applications
Template literal types are useful for:
- Creating flexible API responses.
- Generating dynamic routes or URLs in applications.
- Enhancing type safety in string manipulations.

By leveraging template literal types, TypeScript allows developers to create expressive, type-safe string manipulations, improving the overall maintainability and clarity of the code.
