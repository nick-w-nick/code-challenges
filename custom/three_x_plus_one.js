// Multiply odd numbers by 3 and add 1, divide even numbers by 2, stop when the result equals 1
// Inspired by: https://www.youtube.com/watch?v=094y1Z2wpJg (Veritasium)

function three_x_plus_one(x) {
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

console.log(three_x_plus_one(1)); // { iterations: 3, peak: 4, divides: 2, multiplies: 1 }
console.log(three_x_plus_one(5)); // { iterations: 5, peak: 16, divides: 4, multiplies: 1 }
console.log(three_x_plus_one(26)); // { iterations: 10, peak: 40, divides: 8, multiplies: 2 }
console.log(three_x_plus_one(27)); // { iterations: 111, peak: 9232, divides: 70, multiplies: 41 }