// https://www.codewars.com/kata/5865cff66b5699883f0001aa

const toTime = (seconds) => {
    const minutes = (seconds / 60);
    const hours = (Math.round(minutes) / 60).toString().split('.');
    const remainder = (minutes % 60).toString().split('.');
    
    return `${hours[0]} hour(s) and ${remainder[0]} minute(s)`;
};

console.log(toTime(3600)); // 1 hour(s) and 0 minute(s)
console.log(toTime(323500)); // 89 hour(s) and 51 minute(s)