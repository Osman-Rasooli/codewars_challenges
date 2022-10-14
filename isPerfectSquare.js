
// Given an integral number, determine if it's a square number:

// EXAMPLES

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


const isSquare = n => Number.isInteger(Math.sqrt(n));


// Or We can apply the second method

const isSquare = n => {
  if(n==0) return true;
  
  let root = Math.sqrt(n);
  if(root == Math.floor(root)) return true;
  
  return false;
}
