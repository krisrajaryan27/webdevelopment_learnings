// Functional Programming: Split a String into an Array Using the split Method
function splitify(str) {
  // Add your code below this line
  return str.split(/[" ",-?@.]+/);
  
  // Add your code above this line
}
console.log(splitify("Hello World,I-am code"));