
function sumOfNumbers (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}
const numbs = [12, 15, 2, 58, 21];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum);
