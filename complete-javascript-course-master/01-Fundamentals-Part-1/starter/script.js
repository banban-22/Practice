/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

let firstName = "Jonas"
console.log(firstName)

//Assignment 1
let country = "Japan"
let continent = "Asia"
let population = 1000000000

console.log(country)
console.log(continent)
console.log(population)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(null);
console.log(typeof null);


let age = 30;
age = 31;  //←mutate the variable

//const birthYear = 1991;
//birthYear = 1990;
*/

/*
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
//2 ** 3 means2 to the powerof 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedman";
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //x will be changing, so "let" is used here
x += 10; //x = x + 10;
x *= 10; //x = x * 10;
x++;    // x = x + 1;
x--     // x = x - 1;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);  //Is the age of Jonas greater than Sarah?
// >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
* /

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
//Coding Challenge 1
//BMI = mass / height ** 2;

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / (markHeight ** 2);
console.log(markBmi);
const johnBmi = johnMass / (johnHeight ** 2);
console.log(johnBmi);
//console.log(markBmi, johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regualr string...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);
*/

/*
let age = 18;
const ageIsOldEnough = age >= 18;
if (ageIsOldEnough) {
    console.log('Sarah can start driving license🚗');
}

let = 15;
if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log('Sarah is too young. Wait another ${yearsLeft} years.');
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
//Coding Challenge 2
//BMI = mass / height ** 2;

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / (markHeight ** 2);
console.log(markBmi);
const johnBmi = johnMass / (johnHeight ** 2);
console.log(johnBmi);
//console.log(markBmi, johnBmi);

// const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);

if (markBmi > johnBmi) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's (${johnBmi}) is higher than Mark's BMI (${markBmi})!`);
}
*/

/*
//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas")); //invalid Number
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + '3');
console.log(23 + 10 + 3);
console.log('23' - '10' - '3');
console.log('23' * '3');
console.log('23' / '3');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);

let r = 2 + 3 + 4 + '5';
console.log(r);

let v = '10' - '4' - '3' - 2 + '5';
console.log(v);

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean('')); //false
console.log(Boolean({})); //true

let money = 0;
if (money) {
    console.log("Dont't spend it all :)");
} else {
    console.log("You should get a job!");
}

money = 100;
if (money) {
    console.log("Dont't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log('Height is UNDEFINED');
}

height = 123;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
let age = 18;
if (age === 18) console.log("You just became an adult :D");

console.log(18 === 18);  //true
console.log(18 === 19);  //false
console.log(18 == '18'); //true
console.log(18 === '18'); //false

age = 18;
if (age === 18) console.log("You just became an adult :D"); //true

age = 18;
if (age == 18) console.log("You just became an adult :D");  //true

age = '18';
if (age === 18) console.log("You just became an adult :D"); //false

age = '18';
if (age == 18) console.log("You just became an adult :D"); //true

let favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { //'23' == 23
    console.log('Cool! 23 is a great number');
}
if (favourite === 23) { //'23' not equal 23
    console.log('Cool! 23 is a great number');
}

favourite = Number(prompt("What's your favourite number?"));
if (favourite === 23) {
    console.log('Cool! 23 is a great number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
if (favourite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/

/*
//Coding Challenge #3
let dolphinAve = (96 + 108 + 89) / 3;
let koalaAve = (88 + 91 + 110) / 3;
console.log(dolphinAve, koalaAve);

if (dolphinAve >= koalaAve) {
    console.log('Dolphin wins')
} else if (dolphinAve <= koalaAve) {
    console.log('Koala wins');
} else if (dolphinAve === koalaAve) {
    console.log('Draw');
}

dolphinAve = (97 + 112 + 101) / 3;
koalaAve = (109 + 95 + 123) / 3;
console.log(dolphinAve, koalaAve);

if (dolphinAve >= koalaAve && dolphinAve >= 100) {
    console.log('Dolphin wins');
} else if (dolphinAve <= koalaAve && koalaAve >= 100) {
    console.log('Koala wins');
} else {
    console.log('Draw');
}

dolphinAve = (97 + 112 + 101) / 3;
koalaAve = (109 + 95 + 106) / 3;
console.log(dolphinAve, koalaAve);

if (dolphinAve === koalaAve && (koalaAve >= 100 || dolphinAve >= 100)) {
    console.log('Draw');
} else {
    console.log('No team wins');
}
*/

/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;

    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log('Not a valid day');
        break;
}

if (day === 'wednesday' || day === 'thursday') {
    console.log('write code example');
} else if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}
*/

/*
//belows are expressions
3 + 4
1991
true && false && !false

//this is mixed expressions and statement
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/*
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') :
    console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);
*/

//Coding Challenge #4
let bill = 275;
let tip;
if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
} else {
    tip = bill * 0.20;
}
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);


bill = 275;
tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)