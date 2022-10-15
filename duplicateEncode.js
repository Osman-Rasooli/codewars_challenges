
// The goal of this exercise is to convert a string to a new string where each character in the new string is 
// "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// EXAMPLES
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



function duplicateEncode(word){  
  return word.toLowerCase().split('').map((el, i, arr) => {
    return arr.filter(letter => {
      return letter == el;
    }).length === 1 ? '(' : ')';
  }).join('');
}

// OR

function duplicateEncode(word){
  return word.toLowerCase().split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    }).join('');
}
