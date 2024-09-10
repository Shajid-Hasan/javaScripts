// const age = 40;
// const price = 500;

// if (age <= 12){
//     console.log("you can eat free");
// }
// else if (age >= 60){
//     // 50% discount
//     const discount = 500 * 50 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else if (age >= 50){
//     // 25% discount
//     const discount = 500 *  25 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }

// else if( age >= 40){
//     // 5% discount
//     const discount = 500 * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }

// else{
//     console.log(price)
// }

const age = 60;
const price = 1000;

if(age <= 12){
    console.log("you can eat free");
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age <= 60){
    console.log(price)
}