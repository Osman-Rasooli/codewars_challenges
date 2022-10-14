
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// EXAMPLES

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// OR

function descendingOrder(n){
  let numArr = Array.from(String(n), Number);   // Changes the number into string then converts it to an array of numbers
  return parseInt(numArr.sort((a,b) => b-a).join(''));
}
