/**
 * Interfaces only describe objects
 */

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

/**
 * Classes can implement multiple interfaces
 * (but can only inherit from one class)
 * It basically enforces a specific structure of a class
 * (like a contract)
 * so that other parts of the code can rely on that structure
 */

interface Greetable {
  name: string;
  greet(prhase: string): void;
}

interface AnotherInterface {
  anotherField: number;
}

class PersonClass implements Greetable, AnotherInterface {
  constructor(public name: string, public anotherField: number) {}

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
