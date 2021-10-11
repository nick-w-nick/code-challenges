// https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100
// The second - from the year 101 up to and including the year 200, etc

function centuryFromYear(year) {
    const divided = year / 100;
    return Math.ceil(divided);
}

console.log(centuryFromYear(2020)); // 21
console.log(centuryFromYear(1800)); // 18
console.log(centuryFromYear(1874)); // 19
console.log(centuryFromYear(45)); // 1