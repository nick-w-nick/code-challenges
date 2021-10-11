// Check if a string contains any duplicate characters

const checkDuplicates = (string) => {
    const stringArray = string.split('');
    const uniqueCharacters = new Set(stringArray);
    return [...uniqueCharacters].length < stringArray.length ? true : false;
};

console.log(checkDuplicates('a')); // false
console.log(checkDuplicates('aa')); // true
console.log(checkDuplicates('ab')); // false
console.log(checkDuplicates('abc')); // false
console.log(checkDuplicates('abcdacd')); // true