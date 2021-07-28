import {CallingCard} from "./CallingCard.js";
import {CellPhone} from "./CellPhone.js";

// let card1 = new CallingCard(10); // card1 costs 10 cents / minute to use
// console.log(card1);
// let card2 = new CallingCard(15); // card2 costs 15 cents / minute to use
// console.log(card2);

// let card = new CallingCard(20); // this card costs 20 cents / minute to use
// console.log(card);
// console.log(card.addDollars(1));           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added
// console.log(card.getRemainingMinutes());   // returns 5  (5 minutes left)
// console.log(card.useMinutes(3));
// console.log(card.getRemainingMinutes());   // return 2
// console.log(card.useMinutes(1));
// console.log(card.getRemainingMinutes());   // returns 1

// console.log("New card");
// let card = new CallingCard(5); // this card costs 5 cents / minute to use
// console.log(card.addDollars(2));           // 200 cents / 5 cents/minute = 40 minutes added
// console.log(card.getRemainingMinutes());  // returns 40
// console.log(card.useMinutes(43));
// console.log(card.getRemainingMinutes());   // return 0

// let card1 = new CallingCard(11);
// console.log(card1.addDollars(3));         // 300 cents / 11 = 27.2727272... = 27 minutes added
// console.log(card1.getRemainingMinutes()); // => returns 27

// let card2 = new CallingCard(17);
// console.log(card2.addDollars(3));         // 300 cents / 17 = 17.647... = 17 minutes added
// console.log(card2.getRemainingMinutes()); // => returns 17

let card = new CallingCard(10);
console.log(card);
console.log(card.addDollars(1));

let phone = new CellPhone(card);
//console.log(phone);
//console.log(phone.isTalking());  // => returns false

 console.log(phone.call("555-1212"));
 //console.log(phone.call("666-1212"));

 //console.log(phone.isTalking());  // => returns true

console.log(phone.tick());       // simulate a minute going by
console.log(phone.tick());       // simulate another minute going by
console.log(phone.getTicks());

// console.log(phone.call("666-1212"));
//console.log(phone.tick());  

//console.log(phone.endCall());
//console.log(phone.isTalking());  // => returns false (because the call is over)
console.log(phone.getHistory()); // => returns "555-1212 (2 minutes)"
