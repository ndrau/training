# Modules

Modules in TypeScript are a way to organize and encapsulate code. They allow for the separation of code into distinct files or namespaces, making it easier to manage dependencies and avoid naming conflicts.

## 1. Introduction to Modules

A module is any file that contains a top-level `import` or `export` statement. Each module has its own scope, meaning that variables, functions, and classes defined in a module are not visible outside of it unless explicitly exported.

## 2. Exporting from a Module

You can export variables, functions, classes, and interfaces from a module using the `export` keyword.

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

export const pi = 3.14;
```

## 3. Importing from a Module

You can import exported members from a module using the `import` keyword.

```typescript
// main.ts
import { add, pi } from './math';

console.log(add(2, 3)); // Output: 5
console.log(pi); // Output: 3.14
```

## 4. Default Exports

A module can have a default export, which allows you to export a single member as the main export of the module.

```typescript
// calculator.ts
export default function subtract(x: number, y: number): number {
  return x - y;
}

// main.ts
import subtract from './calculator';

console.log(subtract(5, 2)); // Output: 3
```

## 5. Re-exporting Members

You can re-export members from one module in another module.

```typescript
// shapes.ts
export class Circle {
  constructor(public radius: number) {}
}

// index.ts
export { Circle } from './shapes';
```

## 6. Namespaces vs. Modules

While both namespaces and modules serve to organize code, namespaces are generally used for grouping related types and functions within a single global scope, whereas modules are used for encapsulating code in separate files with their own scopes.

## 7. Using Modules with TypeScript Compiler

When using TypeScript with modules, you can specify the module system to use (e.g., CommonJS, ES6) via the `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  }
}
```

## 8. Practical Applications

Modules help in:

- Organizing code into manageable files.
- Avoiding naming conflicts by encapsulating code.
- Enhancing code readability and maintainability.

By leveraging modules, TypeScript promotes better organization and structure in your applications, making it easier to work collaboratively and maintain larger codebases.
