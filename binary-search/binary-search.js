'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length <= 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    let midpoint = Math.floor(array.length / 2);
    if (target < array[midpoint]) {
      return binarySearch(array.slice(0, midpoint), target);
    }
    if (target >= array[midpoint]) {
      return binarySearch(array.slice(midpoint), target);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
