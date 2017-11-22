const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const no3 = numbers.filter(number => number !== 3);
const num2 = numbers.filter(number => number === 2);
const onlyEven = numbers.filter(number => number % 2 === 0);
console.log(no3, num2, onlyEven);