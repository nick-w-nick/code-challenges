// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product

const inputArray = [ 3, 6, -2, -5, 7, 3 ];

function adjacentElementsProduct(inputArray) {
    let productArray = [];
    inputArray.forEach((element, index) => {
        const nextNumber = index + 1 === inputArray.length || index + 1 > inputArray.length ? inputArray[index - 1] : inputArray[index + 1];
        const currentProduct = element * nextNumber;
        productArray.push(currentProduct);
    });
    return productArray.sort((a, b) => { return b - a })[0];
}

console.log(adjacentElementsProduct(inputArray));