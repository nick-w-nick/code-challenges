const solutions = require('./solutions.js');

const scenarios = [
    {
        value: 2,
        expected: [
            [ 1, 0 ],
            [ 0, 1 ]
        ]
    },
    {
        value: 5,
        expected: [
            [ 1, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 0, 1 ]
        ]
    },
    {
        value: 10,
        expected: [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ]
    }
];

describe.each(scenarios)('Create a matrix in which the 1 shifts over once to the right each row', ({ value, expected }) => {
    test.each(Object.keys(solutions))(`%s (${value})`, (solution) => {
        expect(solutions[solution](value)).toEqual(expected);
    });
});
