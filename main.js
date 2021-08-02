import CallingCard from "./CallingCard.js"
import CellPhone from "./CellPhone.js"

//*****************************************TEST 1****************************************************************************************/
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

//*****************************************TEST 2****************************************************************************************/
// console.log("New card");
// let card = new CallingCard(5); // this card costs 5 cents / minute to use
// console.log(card.addDollars(2));           // 200 cents / 5 cents/minute = 40 minutes added
// console.log(card.getRemainingMinutes());  // returns 40
// console.log(card.useMinutes(43));
// console.log(card.getRemainingMinutes());   // return 0

//*****************************************TEST 3***************************************************************************************/
// let card1 = new CallingCard(11);
// console.log(card1.addDollars(3));         // 300 cents / 11 = 27.2727272... = 27 minutes added
// console.log(card1.getRemainingMinutes()); // => returns 27

// let card2 = new CallingCard(17);
// console.log(card2.addDollars(3));         // 300 cents / 17 = 17.647... = 17 minutes added
// console.log(card2.getRemainingMinutes()); // => returns 17

//****************************************TEST 4*****************************************************************************************/
// let card = new CallingCard(10);
// console.log(card);
// console.log(card.addDollars(1));

// let phone = new CellPhone(card);
// console.log(phone);
// console.log(phone.isTalking());  // => returns false

//  console.log(phone.call("555-1212"));
//  console.log(phone.isTalking());  // => returns true
// console.log(phone.tick());       // simulate a minute going by
// console.log(phone.tick());       // simulate another minute going by
// console.log(phone.endCall());
// console.log(phone.isTalking());  // => returns false (because the call is over)
// console.log(phone.getHistory()); // => returns "555-1212 (2 minutes)"
// console.log(card.getRemainingMinutes()); // => return 8, because the call lasted 2 minutes;
//***********************************************************************************************************************************/

//***************My Own additional test scenarios ***********************************************************************************/
// console.log(phone.call("666-1212"));
// console.log(phone.tick());
// console.log(phone.tick());
// console.log(phone.endCall());
// console.log(phone.getHistory()); 

// console.log(phone.call("777-1212"));
// console.log(phone.tick());
// console.log(phone.tick());
// console.log(phone.tick());
// console.log(phone.endCall());
// console.log(phone.getHistory()); 

// console.log(card.getRemainingMinutes()) 
// //console.log(phone.endCall());
// //console.log(phone.isTalking());  

//***************************************TEST 5********************************************************************************************/

// let card = new CallingCard(20);
// card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

// let phone = new CellPhone(card);
// phone.call("555-1111");
// console.log(phone.tick());       // 1 minute elapsed
// console.log(phone.tick());        // 2 minutes elapsed
// phone.endCall();

// phone.call("555-3333");
// console.log(phone.tick());       // 3 minutes elapsed
// console.log(phone.tick());        // 4 minutes elapsed
// console.log(phone.tick());         // this is the end of the 5th minute, so the call is ended

// console.log(phone.getHistory()); // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"

// console.log(card.getRemainingMinutes()); // => returns 0, because all 5 minutes have been used up


//***************************************TEST 6***********************************************************************************************/

let card = new CallingCard(20);
card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
console.log(phone.tick());       // 1 minute elapsed
console.log(phone.tick());        // 2 minutes elapsed
phone.endCall();

phone.call("555-3333");
console.log(phone.tick());       // 3 minutes elapsed
phone.endCall();        
         
phone.call("666-3333");
console.log(phone.tick());     // 4 minutes elapsed
//console.log(phone.tick());     // this is the end of the 5th minute, so the call is ended
phone.endCall();

phone.call("666-7777");
console.log(phone.tick()); 
console.log(phone.getHistory()); // => returns "555-1111 ( 2 minutes), 555-3333 ( 1 minute), 666-3333 ( cut of at 2 minutes)"

console.log(card.getRemainingMinutes()); // => returns 0, because all 5 minutes have been used up
//*****************************************************************************************************************************************/

