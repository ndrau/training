
# Generics

Generics in TypeScript provide a way to create reusable components that can work with any data type while maintaining type safety. This allows for more flexible and efficient code.

## 1. Generic Functions
You can define a function that works with a variety of types using a generic type parameter.
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello"); // Output: Hello
let numberOutput = identity<number>(42); // Output: 42
```

## 2. Generic Interfaces
Interfaces can also be defined with generics to allow for flexible types.
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity; // Use with number type
```

## 3. Generic Classes
You can create classes that work with generics, providing a way to define type-safe structures.
```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

## 4. Constraints
You can impose constraints on the type parameter to ensure it meets certain criteria.
```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length); // Now we know arg has a length property
}

logLength("Hello"); // Valid
```

## 5. Using Type Parameters in Generic Constraints
You can use type parameters in other type constraints.
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let person = { name: "Alice", age: 30 };
let personName = getProperty(person, "name"); // Valid
```

## 6. Default Type Parameters
You can provide default types for type parameters.
```typescript
function createArray<T = string>(): T[] {
    return [];
}

let stringArray = createArray(); // Defaults to string[]
let numberArray = createArray<number>(); // Explicitly number[]
```

## 7. Record Utility Type
The `Record` utility type allows you to create an object type with specified keys and value types. It is a convenient way to define maps or dictionaries.
```typescript
type Page = 'home' | 'about' | 'contact';
type PageInfo = Record<Page, { title: string; content: string }>;

const pages: PageInfo = {
    home: { title: "Home", content: "Welcome to our website!" },
    about: { title: "About", content: "Learn more about us." },
    contact: { title: "Contact", content: "Get in touch with us." },
};
```

Generics enhance the expressiveness of TypeScript, allowing for more dynamic and type-safe programming. By using generics, you can create functions and classes that are flexible and reusable across different types.
