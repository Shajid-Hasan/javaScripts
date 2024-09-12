const person = {
    name: 'shajid',
    address: 'rangpur',
    profession : 'web developer',
    salary: 25000,
    age: 30,
}
person.salary = 30000;
person['age'] = 33;
console.log(person);
// console.log(person);
// dot notation
console.log(person.profession);
// bracket notation
console.log(person['age']);

const amount = person['salary'];
console.log(amount);

const propName = 'profession';
person['propName'] = 'devops';
console.log(person);
