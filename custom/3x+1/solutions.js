exports.solution1 = (x) => {
    let iterations = 0;
    let divides = 0;
    let multiplies = 0;
    let peak = 0;
    
    // "Manually" start the loop if the input is 1
    if (iterations === 0 && x === 1) {
        x = x * 3 + 1;
        peak = x > peak ? x : peak;
        multiplies++;
        iterations++;
    }
    
    while (x !== 1) {
        if (x % 2 === 0) {
            x = x / 2;
            divides++;
        }
        else {
            x = x * 3 + 1;
            multiplies++;
        }
        peak = x > peak ? x : peak;
        iterations++;
    }
    
    return {
        iterations: iterations,
        peak: peak,
        divides: divides,
        multiplies: multiplies
    };
};
