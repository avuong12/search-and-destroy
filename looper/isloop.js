'use strict';

//Complete this algo
const isLoop = linkedList => {
  let nodeObj = {};
  // establish starting point.
  let currentNode = linkedList.head;
  while (currentNode.next !== null) {
    if ([currentNode.value] in nodeObj) {
      return true;
    } else {
      nodeObj[currentNode.value] = true;
      // assign the current to be the next node.
      currentNode = currentNode.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
