function checkPalindrome(inputString) {
    const stringArray = inputString.split('');
    return stringArray.reverse().join('') === inputString;
}

console.log(checkPalindrome('a')) // true
console.log(checkPalindrome('aabaa')) // true
console.log(checkPalindrome('abac')) // false