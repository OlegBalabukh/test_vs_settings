const a = [1, 2, 3];

let f = () => {
  return a.map(num => {
    return num;
  })
}
let addTwo = () => {
  return a.map(num => {
    return num + 2;
  })
}

let multipleTwoTimes = () => {
  return a.map(num => {
    return num * 2;
  })
}

// sum all nums
function add() {  
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((a,b) => a + b, 0);  
}
add(2, 3, 4, 5); // 14

// or
function add(...args) {
  return args.reduce((a,b) => a + b, 0);  
}
add(2, 3, 4, 5); // 14

function avg(...args) {
  return args.reduce((a,b) => a + b, 0) / args.length; 
}
avg(2, 3, 4, 5); // 3.5

function max(...args) {
  return args.reduce((a,b) => a < b ? b : a); 
}
max(2, 7, 3, 4, 5); // 7

function min(...args) {
  return args.reduce((a,b) => a < b ? a : b); 
}
min(2, -1, 7, 3, 4, 5, 1); // -1
// if args is an array
function min(arr) {
  return arr.reduce((a,b) => a < b ? a : b); 
}
min(2, -1, 7, 3, 4, 5, 1); // -1

