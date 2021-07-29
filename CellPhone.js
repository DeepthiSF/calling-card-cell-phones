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
        //if(this.callingCard.getRemainingMinutes() === 1) {        
        this.getTicks();    
        //console.log(this.callArr);    
        return this.talking = false;      

     }

     tick() {  
        
        if(this.callingCard.getRemainingMinutes() === 1) {
             
            this.addMinute += 1;
            this.getTicks();
            //this.callingCard.useMinutes(1); 

           // this.talking= false;          
            
            //return this.endCall();
          } else if(this.callingCard.getRemainingMinutes() !== 0) {
             this.callingCard.useMinutes(1);
             return this.addMinute += 1;
          }
            
         //else if(this.callingCard.getRemainingMinutes() === 1){
         //     this.callingCard.useMinutes(1);
         //     this.addMinute += 1;
         //     return this.endCall();
         //     // getTicks();
         //     // return this.getHistory();
         //  }
         else {
              return 0;
          }
     }

     getTicks(){
        
        this.callArr.push('(');
        //total = 10 mints
        //"555-1111 (2 minutes), 555-3333 (2 minutes), 666-1111 (cut of at 6 minutes)"
        if(this.callingCard.getRemainingMinutes() === 1) {
            this.callArr.push('cut of at');
            this.callArr.push(this.addMinute);
            this.callingCard.useMinutes(1); 
            if(this.addMinute > 1) {
                this.callArr.push('minutes),');
            } else {
                this.callArr.push('minute),');
            }

        } else {
            this.callArr.push(this.addMinute);
        
              if(this.addMinute > 1){
               return this.callArr.push('minutes),');
              } else {
                return this.callArr.push('minute),');
              }
        }                
         
     }

     getHistory() {
        
        var finalStr = this.callArr.join(' ');

        return finalStr.substring(0, finalStr.length-1); //returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"
         //var finalArr = [];
     }
 }

 export {CellPhone}

