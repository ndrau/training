/**
 * Basic Typescript types and literal examples
 */

// string
const fruit: string = 'apple';

// number
const apples: number = 5;
const temperature: number = 24.6;

// boolean
const isRaining: boolean = false;

// object
const person: object = {
  name: 'Andy',
  age: '31',
  married: true,
};

// Array
const fruits: string[] = ['apple', 'banana', 'orange'];

// Tuple
const fruitAndQuantity: [string, number] = ['apple', 5];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

// Any
const randomValue: any = 10;
const myVariable: any = 'Hello';
const myArray: any[] = [1, 'apple', true];
