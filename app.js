let = name = prompt("Welcome. Okay. What is your name?");
console.log(name);

let = amount = prompt ("Okay "+ name + " How much would you like to spend?");
console.log(amount);

if(amount>=100){
    alert ("Hey big spender! There is even a song for you.")
} else if (amount<100 && amount>10) {
    alert ("Okay. This is a good amount to spend")
} else if (amount<10) {
    alert ("Don't be shy spend some more.")
} else {
    alert ("That is not a number try again.")
    console.log(amount)
};

