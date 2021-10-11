exports.solution1 = (string) => {
    const stringArray = string.split('');
    const uniqueCharacters = new Set(stringArray);
    return [...uniqueCharacters].length < stringArray.length ? true : false;
};