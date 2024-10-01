
# Keyof Types

The `keyof` operator in TypeScript is used to obtain the union of all keys of a given type. This can be particularly useful for creating types that are based on the properties of other types.

## 1. Basic Usage of `keyof`
You can use `keyof` to create a type that represents all the keys of an object type.
```typescript
interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

## 2. Using `keyof` with Index Access Types
You can use `keyof` in combination with index access types to get the type of a specific property.
```typescript
interface Person {
    name: string;
    age: number;
}

type NameType = Person["name"]; // string
```

## 3. Using `keyof` in Generic Functions
The `keyof` operator can be used within generic functions to create more dynamic behavior.
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // Valid
// const invalid = getProperty(person, "height"); // Error: Argument of type '"height"' is not assignable
```

## 4. Combining `keyof` with Mapped Types
You can use `keyof` to create mapped types, which allow you to create new types based on existing ones.
```typescript
type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = { name: "Alice", age: 30 };
// person.age = 31; // Error: Cannot assign to 'age' because it is a readonly property.
```

## 5. Index Types with `keyof`
You can use `keyof` to create index types that represent the keys of another type.
```typescript
interface Dictionary {
    [key: string]: string;
}

type DictionaryKeys = keyof Dictionary; // string
```

Using the `keyof` operator enhances type safety in TypeScript by ensuring that you only use valid property names, reducing potential errors when accessing object properties.
