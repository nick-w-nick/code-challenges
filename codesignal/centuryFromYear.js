function centuryFromYear(year) {
    const divided = year / 100;
    return Math.ceil(divided);
}

console.log(centuryFromYear(2020)); // 21
console.log(centuryFromYear(1800)); // 18
console.log(centuryFromYear(1874)); // 19
console.log(centuryFromYear(45)); // 1