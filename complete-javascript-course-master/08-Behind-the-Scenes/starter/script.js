'use strict';

// const a = 'Jonas';
// first();

// function first() {
//   const b = 'Hello';
//   second();

//   function second() {
//     const c = 'Hi';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey';
//   console.log(d + c + b + a);
// }

////////////////////////////////////////////
/*
SCOPE
*/
////////////////////////////////////////////

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   printAge();

//   function printAge() {
//     let output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassining outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, you are ar millenial, ${firstName}`;
//       console.log(str);
//     }

//     //   //   Error
//     //   console.log(str);

//     return age;

//     function add(a, b) {
//       return a + b;
//     }
//   }
// }

// // // Error
// // console.log(add(2, 3));

// const firstName = 'Jonas';
// calcAge(1991);

// // // Error
// // console.log(age);
// // console.log(printAge());

/*////////////////////////////////////////////
HOISTING and TDZ
////////////////////////////////////////////*/
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

/*////////////////////////////////////////////
"this" keyword
////////////////////////////////////////////*/
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
//   //   since arrow function does not have their own "this" keyword, this "this" keword reflects the global one here
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
console.log(marriedJessica);
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage:', jessica2);
console.log('After Marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage:', jessica2);
console.log('After Marriage', jessicaCopy);
