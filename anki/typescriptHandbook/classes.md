# Classes

Classes in TypeScript are a way to create objects that encapsulate data and behavior. They support inheritance, access modifiers, and more, allowing for a structured approach to object-oriented programming.

## 1. Basic Class Definition

You can define a class using the `class` keyword, followed by the class name and a body containing properties and methods.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('Alice', 30);
person.greet(); // Output: Hello, my name is Alice.
```

## 2. Access Modifiers

TypeScript supports three access modifiers: `public`, `private`, and `protected`.

- **public**: Members are accessible from anywhere (default).
- **private**: Members are accessible only within the class.
- **protected**: Members are accessible within the class and its subclasses.

```typescript
class Employee {
  private id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const employee = new Employee(1, 'Bob');
// console.log(employee.id); // Error: Property 'id' is private and only accessible within class 'Employee'.
```

## 3. Inheritance

Classes can extend other classes, allowing for code reuse and a hierarchical structure.

```typescript
class Animal {
  move(distance: number) {
    console.log(`Animal moved ${distance}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const dog = new Dog();
dog.move(10); // Output: Animal moved 10m.
dog.bark(); // Output: Woof!
```

## 4. Getters and Setters

You can define getters and setters to control access to properties.

```typescript
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area); // Output: 50
```

## 5. Abstract Classes

Abstract classes cannot be instantiated directly and are meant to be subclassed. They can contain abstract methods that must be implemented by derived classes.

```typescript
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
```

## 6. Interfaces and Classes

Classes can implement interfaces to ensure they adhere to a specific contract.

```typescript
interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log('Printing document...');
  }
}

const doc = new Document();
doc.print(); // Output: Printing document...
```

Classes in TypeScript provide a powerful way to create and manage complex data structures and behaviors, enhancing code organization, readability, and maintainability.
