
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10]
const revNumbers = [];

// for(const num of numbers){
//     console.log(numbers);
//     revNumbers.unshift(num);
// }
// console.log(revNumbers);

for(let i=numbers.length-1; i>=0; i--){
    const num = numbers[i];
    console.log(num);
}
// console.log(numbers);