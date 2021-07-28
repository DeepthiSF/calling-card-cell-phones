import {CallingCard} from "./CallingCard.js";

class CellPhone {
     constructor(card) {
        //this.callingCard = card;       
        this.talking = false;
        this.addMinute = 0;
       // this.phoneNumber = '';
        this.callArr = [];
        
     }

     isTalking() {
        return this.talking;
     }

     call(phoneNumber) {
         //var callArr = [];
         if (phoneNumber !== '') {
             this.callArr.push(phoneNumber);
             return this.talking = true;
         } else {
             return this.talking = false;
         }
     }

     endCall() {
        return this.talking = false;
     }

     tick() {  
          
         return this.addMinute += 1;
         //return this.callArr.push(this.addMinute);
     }

     getTicks(){
         
         this.callArr.push(this.addMinute);
         this.callArr.push('minutes');
         return this.callArr.join('');
     }

     getHistory() {
         return this.callArr.join(' '); //returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"
         //var finalArr = [];



     }
 }

 export {CellPhone}