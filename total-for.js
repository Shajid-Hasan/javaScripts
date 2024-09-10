
let total = 0;

for(let i=0; i<20; i++){
    if(i %3 === 0){
        console.log(i);
        total = total + i;
        console.log('total', total);
    }
}
console.log('Total of the numbers',total);