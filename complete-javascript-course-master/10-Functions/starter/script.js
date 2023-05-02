'use strict';

/* 
/////////////////////////////////////////////////////////////////////
// Closure
/////////////////////////////////////////////////////////////////////
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);

// Example1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assiging f function
h();
f();
console.dir(f);

// Example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3); 
*/

/* 
/////////////////////////////////////////////////////////////////////
// Immediately Invoked Function Expression(IIFE)
/////////////////////////////////////////////////////////////////////
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate)
console.log(notPrivate); 
*/

/* 
/////////////////////////////////////////////////////////////////////
// Bind Methods
/////////////////////////////////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williaims');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value =>value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));

// Challenge
// const newAddTax = {
//   tax: function (rate, value) {
//     console.log(`${value + value * rate} `);
//   },
// };
// const tax = newAddTax.tax;
// tax.call(newAddTax, 0.23, 100);
// tax.call(newAddTax, 0.23, 200);

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
 */

/* 
/////////////////////////////////////////////////////////////////////
// Call and Apply Methods
/////////////////////////////////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT Work
// book(34, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss); 
*/

/* 
/////////////////////////////////////////////////////////////////////
// Function Returns Function
/////////////////////////////////////////////////////////////////////
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); 
*/

/* 
/////////////////////////////////////////////////////////////////////
// Function accepting Callback Functions
/////////////////////////////////////////////////////////////////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function (higher level of abstraction)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses allbacks all the time
// high5 = callback function
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); 
*/

/* 
/////////////////////////////////////////////////////////////////////
// Value vs. Reference
/////////////////////////////////////////////////////////////////////
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24739479284) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing ....
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
  console.log(person.passport);
};

newPassport(jonas);
checkIn(flight, jonas);
 */

/* 
/////////////////////////////////////////////////////////////////////
// Default Parameters
/////////////////////////////////////////////////////////////////////
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5 (Short Circuiting)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5, 4000);
createBooking('LH123', undefined, 4000);
 */
/* 
/////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/////////////////////////////////////////////////////////////////////
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// 1.
// const registerNewAnswer = () => {
//   const question = prompt(`${poll.question}\n ${[...poll.options]}\n`);
//   let answer = Number(question);

//   if (answer === 0) {
//     console.log(poll.options[0].slice(3));
//   } else if (answer === 1) {
//     console.log(poll.options[1].slice(3));
//   } else if (answer === 2) {
//     console.log(poll.options[2].slice(3));
//   } else if (answer === 3) {
//     console.log(poll.options[3].slice(3));
//   } else {
//     console.log('Number is not valid!');
//   }
// };

// 2.
// document.querySelector('.poll').addEventListener('click', registerNewAnswer);

// 3.
// const displayResults = () => {};
 */

/////////////////////////////////////////////////////////////////////
// Coding Challenge #2
/////////////////////////////////////////////////////////////////////
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
