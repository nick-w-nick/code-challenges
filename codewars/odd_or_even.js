// https://www.codewars.com/kata/5949481f86420f59480000e7

const oddOrEven = (numbers = [0]) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue;
    };
    
    const sum = numbers.reduce(reducer, 0); // Set reducer initial value to 0 in case in the input array is empty
    
    return sum % 2 === 0 ? 'even' : 'odd';
};

console.log(oddOrEven([0])); // even
console.log(oddOrEven([0, 1, 4])); // odd
console.log(oddOrEven([0, -1, -5])); // even
console.log(oddOrEven([])); // even