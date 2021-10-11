#!/bin/bash

current_dir="${PWD##*/}"

if [ $current_dir != "code-challenges" ]; then echo "Please run the create-challenge script from the root directory" ; fi

echo "What is the name of your challenge?"
read -r challenge_name

if [ -z "$challenge_name" ]; then echo "Error: A challenge name must be provided!" ; exit 1 ; fi
if [ -d "custom/$challenge_name" ]; then echo "A challenge named '$challenge_name' already exists." ; exit 1 ; fi

echo "What is the description of your challenge?"
read -r challenge_description

if [ -z "$challenge_description" ]; then echo "Error: A challenge description must be provided!" ; exit 1 ; fi

mkdir "custom/$challenge_name"

echo "# $challenge_name

$challenge_description

## Example

- \`input\` = \`output\`" > custom/$challenge_name/README.md

echo "exports.solution1 = () => {
    
};" > custom/$challenge_name/solutions.js

echo "const solutions = require('./solutions.js');

const scenarios = [
    {
        value: '',
        expected: ''
    },
];

describe.each(scenarios)('$challenge_description', ({ value, expected }) => {
    test.each(Object.keys(solutions))("'`%s ({value})`'", (solution) => {
        expect(solutions[solution](value)).toEqual(expected);
    });
});" > custom/$challenge_name/solutions.test.js