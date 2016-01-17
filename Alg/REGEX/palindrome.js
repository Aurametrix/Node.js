function isPalindrome(str) {
  return str === str.split("").reverse().join("");

  // ES6
  // var isPal = str => str === str.split("").reverse().join("");
  
}
 
console.log(isPalindrome("ingirumimusnocteetconsumimurigni"));
