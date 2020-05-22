const createNumberArray = (num) => {
    const numberArray = num.toString().split('').map(digit => {
        return parseInt(digit);
    });
    
    return numberArray;
}

const digital_root = (number) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue;
    };
    
    let singleDigit = createNumberArray(number);
    
    while (singleDigit.length > 1) {
        singleDigit = createNumberArray(singleDigit.reduce(reducer));
    }
    
    return singleDigit[0];
}

console.log(digital_root(8888));
