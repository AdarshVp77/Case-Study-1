// 1.Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.

function testPrime() {
  let arr = [1, 5, 13, 4, 6, 7];
  let firstElement = arr[0];
  console.log(firstElement);

  if (firstElement < 2) {
    return "It is not a prime number";
  }
  for (let i = 2; i < firstElement; i++) {
    if (firstElement % i === 0) {
      return "It is not a prime number";
    }
  }
  return "It is a prime number";
}

console.log(testPrime());

// 2.Write a JavaScript program to find the most frequent item of an array.

let numbers = [7, 2, 4, 9, 3, 6, 7, 3, 7, 2, 7];
let x = 1;
let y = 0;
let frequentNum;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i; j < numbers.length; j++) {
    if (numbers[i] == numbers[j]) {
      y++;
    }
    if (x < y) {
      x = y;
      frequentNum = numbers[i];
    }
  }
  y = 0;
}
console.log("The most frequent number is " + frequentNum);

// 3.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log("It is a even number, i.e " + i);
  } else {
    console.log("It is a odd number, i.e " + i);
  }
}

// 4.Write a JavaScript program to find the sum of squares of the elements of an array.

let array = [2, 3, 5, 4, 1];
let sumSq = 0;
for (let i = 0; i < array.length; i++) {
  sumSq += Math.pow(array[i], 2);
}

console.log(sumSq);
