
# Objects

In TypeScript, objects are a crucial aspect of the language, allowing for complex data structures. TypeScript provides several ways to define and work with objects, ensuring type safety and clarity.

## 1. Object Types
You can define an object type by specifying the shape of the object using an interface or a type alias.
```typescript
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 30
};
```

## 2. Optional Properties
Properties in an object can be marked as optional using the `?` symbol.
```typescript
interface User {
    name: string;
    age?: number; // age is optional
}

let user: User = { name: "Alice" }; // Valid
```

## 3. Readonly Properties
Properties can be marked as `readonly`, making them immutable after initialization.
```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a readonly property.
```

## 4. Index Signatures
Index signatures allow you to define objects with arbitrary property names.
```typescript
interface StringArray {
    [index: number]: string; // An array-like object
}

let myArray: StringArray = ["Alice", "Bob"];
```

## 5. Function Types in Objects
You can define function types within object types, allowing you to include methods.
```typescript
interface User {
    name: string;
    greet: () => void; // Method definition
}

let user: User = {
    name: "John",
    greet: () => console.log(`Hello, ${user.name}!`)
};
```

## 6. Extending Interfaces
You can extend interfaces to create new interfaces that inherit properties.
```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark: () => void;
}

let dog: Dog = {
    name: "Rex",
    bark: () => console.log("Woof!")
};
```

## 7. Intersection Types
You can create an object type by combining multiple types.
```typescript
type Person = { name: string };
type Employee = { id: number };

type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = { name: "Alice", id: 1 };
```

Using these object-oriented features in TypeScript allows for better organization, maintainability, and type safety in your code, making it easier to work with complex data structures.
