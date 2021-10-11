const solutions = require('./solutions.js');

const scenarios = [
    {
        value: 'a',
        expected: false
    },
    {
        value: 'aa',
        expected: true
    },
    {
        value: 'abc',
        expected: false
    },
    {
        value: 'aabbcc',
        expected: true
    },
];


describe.each(scenarios)('Checks if duplicate characters are present within a string', ({ value, expected }) => {
    test.each(Object.keys(solutions))(`%s (${value})`, (solution) => {
        expect(solutions[solution](value)).toEqual(expected);
    });
});