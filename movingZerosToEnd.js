// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
  return [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)];
}

// OR

function moveZeros(arr) {
  let modArr = arr.filter(el => el !== 0);
  let newArr = [];
  for(i = 0; i < arr.length - modArr.length; i++) newArr.push(0);
  return [...modArr, ...newArr];
}
