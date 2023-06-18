const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => console.log(fruit));

/* 
Output:
apple
banana
cherry
*/

const firstEven = numbers.find((num) => num % 2 === 0);

console.log(firstEven); // Output: 2

const sumOfOdd = numbers.filter((num) => num % 2 !== 0).reduce((acc, num) => acc + num, 0);

console.log(sumOfOdd); // Output: 9

const users = [
	{ id: 1, name: "John", age: 25 },
	{ id: 2, name: "Alice", age: 30 },
	{ id: 3, name: "Bob", age: 20 },
	{ id: 4, name: "Jane", age: 35 },
];

const usersAbove25 = users.filter((user) => user.age > 25);
console.log(usersAbove25);

/*
  Output:

    [
      { id: 2, name: 'Alice', age: 30 },
      { id: 4, name: 'Jane', age: 35 }
    ]
  
  */

const userWithId2 = users.find((user) => user.id === 2);

console.log(userWithId2);

// Output:  { id: 2, name: 'Alice', age: 30 }
