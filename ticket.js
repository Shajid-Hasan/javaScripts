const age = 40;
const ticketPrice = 800;
const isStudent = true;
if(age <= 10){
    console.log('children are free entry');
}
else if(isStudent === true){
    discount = ticketPrice * 50 / 100;
    payAmount = ticketPrice - discount;
    console.log('Students get 50% discount :  ' + payAmount)
}
else if(age >= 60){
    discount = ticketPrice * 15 / 100;
    payAmount = ticketPrice - discount;
    console.log('senior citizens : ' +  payAmount)
}
else{
    console.log('Regular ticket price : ' + ticketPrice)
}
