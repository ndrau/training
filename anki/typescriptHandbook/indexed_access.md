
# Indexed Access Types

Indexed access types in TypeScript allow you to create types that reference properties of existing types. This enables greater flexibility and reusability in your type definitions.

## 1. Basic Indexed Access Types
You can access the type of a specific property in an object type using indexed access types.
```typescript
interface Person {
    name: string;
    age: number;
}

type PersonName = Person["name"]; // string
type PersonAge = Person["age"]; // number
```

## 2. Using Indexed Access Types with Unions
Indexed access types can also be used with union types to extract specific properties.
```typescript
type Animal = { dog: { barks: boolean }; cat: { meows: boolean } };
type DogBarks = Animal["dog"]["barks"]; // boolean
type CatMeows = Animal["cat"]["meows"]; // boolean
```

## 3. Nested Indexed Access Types
You can chain indexed access types to navigate through nested properties.
```typescript
interface Company {
    employees: {
        name: string;
        position: string;
    }[];
}

type EmployeeName = Company["employees"][number]["name"]; // string
```

## 4. Conditional Types with Indexed Access
You can combine indexed access types with conditional types for more complex type manipulations.
```typescript
type ValueOf<T> = T[keyof T];

type User = { id: number; name: string; age: number };
type UserValues = ValueOf<User>; // number | string
```

## 5. Readonly Properties
You can use indexed access types with readonly properties to enforce immutability.
```typescript
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

type ReadonlyName = ReadonlyPerson["name"]; // string
```

## 6. Benefits of Indexed Access Types
Indexed access types enhance type safety by ensuring that only valid properties can be accessed. This prevents errors and improves code maintainability.

Using indexed access types, you can create more dynamic and expressive type definitions that adapt to existing structures, leading to cleaner and more robust code.
