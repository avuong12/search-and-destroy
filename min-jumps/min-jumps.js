'use strict';

// Complete this algo
const minJumps = arr => {
  // start at the last indext of the array.
  let currentFinishIndex = arr.length - 1;

  // Loop through array and identify the lowest index that is the number that crossed the finish line. Set the new finish line.
  let jumps = 0;
  while (currentFinishIndex > 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > currentFinishIndex - i) {
        currentFinishIndex = i;
        jumps++;
      }
    }
  }
  return jumps;

  // repeat until the identified number is at array[0].
};

module.exports = minJumps;
