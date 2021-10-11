exports.solution1 = (rows) => {
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
