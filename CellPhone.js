import {CallingCard} from "./CallingCard.js";

class CellPhone {
     constructor(card) {
        this.callingCard = card;       
        this.talking = false;
        this.addMinute = 0;
       // this.phoneNumber = '';
        this.callArr = [];
        this.finalArr = [];
        
     }

     isTalking() {
        return this.talking;
     }

     call(phoneNumber) {
         //var callArr = [];
        this.addMinute = 0;
         if (phoneNumber !== '') {
             this.callArr.push(phoneNumber);
             return this.talking = true;
         } else {
             return this.talking = false;
         }
     }

     endCall() {
         // We are at this point**************
        //if(this.callingCard.getRemainingMinutes() === 0) {

        
        this.getTicks();    
        console.log(this.callArr);    
        return this.talking = false;      

     }

     tick() {  
         if(this.callingCard.getRemainingMinutes() !== 0) {
            this.callingCard.useMinutes(1);
            return this.addMinute += 1;
         } else {
             this.endCall();
         }
         
         //return this.callArr.push(this.addMinute);
     }

     getTicks(){
        
        this.callArr.push('(');
        //total = 10 mints
        //"555-1111 (2 minutes), 555-3333 (2 minutes), 666-1111 (cut of at 6 minutes)"
        if(this.callingCard.getRemainingMinutes() === 1) {
            this.callArr.push('cut of at');

        } else {
            this.callArr.push(this.addMinute);
        }
         if(this.addMinute > 1){
            return this.callArr.push('minutes),');

         } else if(this.callingCard.getRemainingMinutes() === 1) {
             return this.callArr.push('minutes),');
         }

            return this.callArr.push('minute),');
         
         
        // return this.callArr.join('');
     }

     getHistory() {
             
        return this.callArr.join(' '); //returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"
         //var finalArr = [];
     }
 }

 export {CellPhone}

