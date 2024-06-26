// Traditional / Normal function :-

// function add(a, b) {
//     console.log(a + b);
// }

// add(5, 2);

// Arrow functions :- Also known as anonymous functions.

// const add = (a, b) => console.log(a + b);
// add(5, 2);


// Other e.g. :-

// const greet = () => 'Hello Everyone!';
// console.log(greet());

// const square = x => x * x;
// console.log(square(4));

// Template Literals :-

// let sentence = 'Hi there, how are you?'; // '' -> String literals
// console.log(sentence);

// let sentences = "Hi, I am fine."; // " " -> String literals
// console.log(sentences);

// const name = 'Praveen';
// const greeting = 'Hello, ${name}!';
// console.log(greeting);

// const greetings = "Hello, ${name}!";
// console.log(greetings);

// const greet = `Hello, ${name}`; // ` ` -> Template literals
// console.log(greet);


// Destructuring :-

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

// Array destructuring :-

// const [a, b, c, d, e, f, g] = [1, 2, 3, 4, 5, 6, 7];

// console.log(b);
// console.log(d);
// console.log(e);
// console.log(g);


// Destructuring with default values :-
// const [x, y, z = 5] = [1, 2];
// console.log(x);
// console.log(y);
// console.log(z);


// Object destructuring :-

// const user = {
//     name: 'Kamalesh',
//     age: 26,
//     state: 'Tamil Nadu',
//     dist: 'Madurai'
// };

// // console.log(user.name);
// // console.log(user.age);

// const { name, age, state, dist } = user;
// console.log(name);
// console.log(age);
// console.log(state);
// console.log(dist);


// Nested Object destructuring :-

// const user = {
//     name: 'Kamalesh',
//     address: {
//         state: 'Tamil Nadu',
//         city: 'Madurai',
//         pin: 123456
//     }
// };

// const { name, address: { state, city, pin } } = user;

// console.log(name);
// console.log(state);
// console.log(city);
// console.log(pin);





// Spread Operator (...) :- The spread operator (...) allows for expanding iterable elements
// (such as arrays or objects) into individual elements. It is useful for copying arrays,
// merging arrays or objects and spreading function arguments.

// Syntax :-
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array1);
// const array2 = [4, 5, ...array1];
// console.log(array2);

// copying :-
// const original = [1, 2, 3];
// const copy = [...original]
// console.log(copy);

// merging :-
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
// console.log(merged);


// Spreading in function call :-

// const sum = (a, b, c) => a + b + c;
// // console.log(sum(1, 2, 3));

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(sum(...nums));

// Spreading Objects :-

// const obj1 = { a: 1, b: 2 };
// console.log(obj1);
// const obj2 = { c: 3, d: 4 };
// console.log(obj2);
// const merged = { ...obj1, ...obj2 };
// console.log(merged);



// Rest Parameter (...) :- Rest parameters allows a function to accept an indefinite
// number of arguments as an array. It uses the same (...) syntax as the spread
// operator, but instead of spreading elements, it collects them.

// Syntax :-

// function sum(...numbers) {
//     return numbers.reduce((init, curr) => init + curr, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Example 2 :-
// function concatenate(separator, ...strings) {
//     return strings.join(separator);
// }

// console.log(concatenate(', ', 'name', 'age', 'state'));