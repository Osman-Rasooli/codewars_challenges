// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {  
  let str2Obj = {}, str1Obj = {};
  str2.split('').map(el => {
    if(!str2Obj[el]) {
      str2Obj[el] = 1;
    }else {
      str2Obj[el]++;
    }
  })
  str1.split('').map(el => {
    if(!str1Obj[el]) {
      str1Obj[el] = 1;
    }else {
      str1Obj[el]++;
    }
  })
  let result = '';
  if(str1.length >= str2.length) {
    result = Object.keys(str2Obj).map(el => {
      if(str2Obj[el] <= str1Obj[el]) return true;
      return false;
    })
  } else return false;
  return result.every(el => el === true);
}
