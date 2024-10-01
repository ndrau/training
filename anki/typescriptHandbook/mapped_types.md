
# Mapped Types

Mapped types in TypeScript allow you to create new types by transforming existing ones. They are particularly useful for creating variations of existing types, such as making properties optional, readonly, or applying other transformations.

## 1. Basic Syntax
The basic syntax for a mapped type is as follows:
```typescript
type MappedType<T> = {
    [K in keyof T]: T[K];
};
```
This creates a new type that has the same properties as `T`.

## 2. Making Properties Optional
You can create a mapped type that makes all properties of an existing type optional.
```typescript
type Partial<T> = {
    [K in keyof T]?: T[K];
};

interface Person {
    name: string;
    age: number;
}

type PartialPerson = Partial<Person>; // { name?: string; age?: number; }
```

## 3. Making Properties Readonly
You can create a mapped type that makes all properties readonly.
```typescript
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }
```

## 4. Transforming Property Types
You can use mapped types to transform the types of properties.
```typescript
type MappedType<T> = {
    [K in keyof T]: string; // All properties become string
};

type PersonAsString = MappedType<Person>; // { name: string; age: string; }
```

## 5. Conditional Mapped Types
You can also apply conditional types within a mapped type.
```typescript
type MappedType<T> = {
    [K in keyof T]: T[K] extends string ? number : T[K];
};

type NewPerson = MappedType<Person>; // { name: number; age: number; }
```

## 6. Using Mapped Types with Interfaces
Mapped types work seamlessly with interfaces, allowing for flexible and dynamic type creation.
```typescript
interface User {
    id: number;
    name: string;
}

type OptionalUser = Partial<User>; // { id?: number; name?: string; }
```

## 7. Practical Applications
Mapped types are particularly useful for:
- Creating utility types for libraries.
- Enhancing code maintainability by generating variations of existing types.
- Enforcing consistent structures across different parts of an application.

By using mapped types, TypeScript empowers developers to create flexible, reusable, and maintainable type definitions, leading to better code organization and type safety.
