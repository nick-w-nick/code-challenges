
// Create a matrix in the following format, where the 1 shifts to the right each row
// [
//     [ 1, 0, 0, 0, 0 ],
//     [ 0, 1, 0, 0, 0 ],
//     [ 0, 0, 1, 0, 0 ],
//     [ 0, 0, 0, 1, 0 ],
//     [ 0, 0, 0, 0, 1 ]
// ]

const createMatrix = (rows) => {
    let initialArray = [];
    for (let i = 0; i < rows; i++) {
        let currentRow = [];
        for (let innerIndex = 0; innerIndex < rows; innerIndex++) {
            currentRow.push(0);
        }
        currentRow[i] = 1;
        initialArray.push(currentRow);
    }
    return initialArray;
};

console.log(createMatrix(2));
// [
//     [ 1, 0 ],
//     [ 0, 1 ]
// ]

console.log(createMatrix(5));
// [
//     [ 1, 0, 0, 0, 0 ],
//     [ 0, 1, 0, 0, 0 ],
//     [ 0, 0, 1, 0, 0 ],
//     [ 0, 0, 0, 1, 0 ],
//     [ 0, 0, 0, 0, 1 ]
// ]

console.log(createMatrix(10));
// [
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
// ]