
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



function zero() {
  var num = 0;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function one() {
  var num = 1;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function two() {
  var num = 2;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function three() {
  var num = 3;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function four() {
  var num = 4;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function five() {
  var num = 5;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function six() {
  var num = 6;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function seven() {
  var num = 7;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function eight() {
  var num = 8;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function nine() {
  var num = 9;
  if(!arguments.length) return num;
  return Math.floor(+eval(num + arguments[0][0] + arguments[0][1]));
}
function plus() {
    return ['+', arguments[0]];
}
function minus() {
    return ['-', arguments[0]];
}
function times() { 
  return ['*', arguments[0]];
}
function dividedBy() {
    return ['/', arguments[0]];
}
