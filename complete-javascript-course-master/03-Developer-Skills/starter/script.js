// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors? -> Do NOT want to include 'error' word which is in the array
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitud = function (temps) {
  //The loop is startse very first (the most left)
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max - min;
};
calcTempAmplitud([3, 7, 4]);

const amplitude = calcTempAmplitud(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

const calcTempAmplitudNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max - min;
};
calcTempAmplitudNew([3, 7, 4]);

const amplitudeNew = calcTempAmplitudNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIX the BUG
    //value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  //B) FIND the BUG
  console.table(measurement);
  console.log(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  //   let max = temps[0];
  //   let min = temps[0];
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudBug([3, 5, 1], [9, 4, 5]);
//A) IDENTIFY
console.log(amplitudeBug);
*/

//Coding Challenge #1
//1) Understanding the Problem
//-transformed to strng separated by...
//-what is the Xdays? Answer; index + 1

//2) Breaking up into string
//-Transform array into string
//-Transform each element to string with celcius degree
//-Strings neeeds to contain day (index + 1)
///-And ... between elements and start and end of string
//-Log string to console

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForest = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + `${data1[i]} in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForest(data1);
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  `... ${data1[0]}degree ... ${data1[1]}degree ... ${data1[2]}degree`
);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}degree in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
