const solutions = require('./solutions.js');

const solutionExports = Object.keys(solutions);

solutionExports.forEach(solution => {
    test(`Checks if duplicate characters are present within a string - ${solution}`, () => {
        expect(solutions[solution]('a')).toBe(false);
        expect(solutions[solution]('aa')).toBe(true);
        expect(solutions[solution]('abc')).toBe(false);
        expect(solutions[solution]('aabbcc')).toBe(true); 
    });
});