function isPrime(number: number) {
    if (number < 2) {
        return false;
    }
    
    // check if it is 2 or 3 (those are prime)
    if (number === 2 || number === 3) {
        return true;
    }
    
    // check if is divisible by 2 or 3
    if ((number % 2) === 0 || (number % 3) === 0) {
        return false;
    } 
    
    // get square root
    const squareRoot = Math.sqrt(number);
    
    if (squareRoot.toString().indexOf('.') === -1) {
        return false;
    }
    
    let divisor = 5;
    while (divisor <= squareRoot) {
        if (number % divisor === 0) {
            return false;
        }
        
        if (number % (divisor + 2) === 0) {
            return false;
        }
        
        divisor += 6;
    }
    
    return true;
}