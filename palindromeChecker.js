// This function will return a boolean expression True if the argumenent is a palindrome
// Its one of the project from part of freeCodeCamp's JS algorithms and data structure

function palindromeChecker(str){

  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reverseStr = cleanStr.split('').reverse().join('');

  return cleanStr ===  reverseStr
}


let string = "RaceCar";
console.log(palindromeChecker(string));
