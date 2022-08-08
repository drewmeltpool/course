const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

export default isLeapYear;
// 1900, 2003, 2020
