function kilometerToMeter(khulna){
    var dhaka = khulna * 1000;
    return dhaka;
}
var result = kilometerToMeter(2);
console.log(result);


function budgetCalculator(watch, mobile, laptop){
    var result = watch * 50 + mobile * 100 + laptop * 500;
    return result;
}
var totalBudget = budgetCalculator(5,5,5);
console.log(totalBudget);


function hotelCost(duration) {
var moneyCost = 0;
if(duration <= 10){
    moneyCost = duration * 100;
}
else if (duration <= 20){
    var firstPartOfDays = 10 * 100;
    var remaining = duration - 10;
    var secondPartOfDays = remaining * 80;
    moneyCost = firstPartOfDays + secondPartOfDays;
}
else{
    var firstPartOfDays = 10 * 100;
    var secondPartOfDays = 10 * 80;
    var remaining = duration - 20;
    var thirdPartOfDays = remaining * 50;
    moneyCost = firstPartOfDays + secondPartOfDays + thirdPartOfDays;
}
return moneyCost;
}
var totalCost = hotelCost (28);
console.log(totalCost);


var friendsName = ["Akash", "Masum", "Jamal", "Raquibul"];
function megaFriend(arr) {
    var bigName = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > bigName.length) {
            bigName = arr[i];
        }
    }
    return bigName;
}

console.log(megaFriend(friendsName));


