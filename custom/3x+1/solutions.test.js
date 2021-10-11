const solutions = require('./solutions.js');

const scenarios = [
    {
        value: 1,
        expected: { iterations: 3, peak: 4, divides: 2, multiplies: 1 }
    },
    {
        value: 5,
        expected: { iterations: 5, peak: 16, divides: 4, multiplies: 1 }
    },
    {
        value: 26,
        expected: { iterations: 10, peak: 40, divides: 8, multiplies: 2 }
    },
    {
        value: 27,
        expected: { iterations: 111, peak: 9232, divides: 70, multiplies: 41 }
    },
];

describe.each(scenarios)('Multiply odd numbers by 3 and add 1, divide even numbers by 2, stop when the result equals 1', ({ value, expected }) => {
    test.each(Object.keys(solutions))(`%s (${value})`, (solution) => {
        expect(solutions[solution](value)).toEqual(expected);
    });
});
