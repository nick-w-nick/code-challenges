// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
// Given the string, check if it is a palindrome

function checkPalindrome(inputString) {
    const stringArray = inputString.split('');
    return stringArray.reverse().join('') === inputString;
}

console.log(checkPalindrome('a')) // true
console.log(checkPalindrome('aabaa')) // true
console.log(checkPalindrome('abac')) // false