
// const age = 18;
// if(age >= 18){
//     console.log("you cam vote");
// }
// else{
//     console.log("don't go vote");
// }

// Ternary

// const age = 12;

// age >= 18 ? console.log("vote dio") : console.log("ghumai thako");

let price = 500;
const leader = true;

if(leader === true){
    price = 0;
}

else{
    price = price + 100;
}
console.log(price)

// Ternary 

price = isLeader === true ? 0 : price + 100;

// Ternary simple Advance

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = price + 1000;
    }
}

// .......ternary convert......

price = isLeader === leader ? 0 :
            price > 10000 ? price / 2 : 0
                price + 1000;