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