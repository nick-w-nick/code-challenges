// Convert a number (85262) to an array ([ 8, 5, 2, 6, 2 ]) for iteration
const createNumberArray = (num) => {
    const numberArray = num.toString().split('').map(digit => {
        return parseInt(digit);
    });
    
    return numberArray;
}

const digital_root = (number) => {
    // Standard reducer, straight from MDN docs
    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue;
    };
    
    // Giving this variable an initial value of the array created from the original number
    // Assignment using 'let' keyword is important as it will be modified during iteration
    let singleDigit = createNumberArray(number);
    
    // Keep running the reduce function on the array until only it only has 1 value
    // Each time the reduce function runs the size of the array decreases
    while (singleDigit.length > 1) {
        singleDigit = createNumberArray(singleDigit.reduce(reducer));
    }
    
    // Return the final single digit number
    // This will not trigger until the while loop above has stopped/evaluated to false
    return singleDigit[0];
}

console.log(digital_root(8888));
