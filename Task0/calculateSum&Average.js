const numbers = [5, 7, 9];

const totalSum = numbers.reduce(function(total, num) {
    return total + num; }, 0);

const average = totalSum / numbers.length;

console.log("Sum: " + totalSum);
console.log("Average: " + average);
