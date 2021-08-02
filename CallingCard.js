class CallingCard {
    constructor(centsPerMinute){
        this.centsPerMinute = centsPerMinute;
        this.amountLeft = 0;
        this.remainingMinutes = 0;
        //this.minutesUsed = 0;
    }

    addDollars(amount=1) {
        this.amountLeft += (amount * 100);
        this.remainingMinutes = this.amountLeft/this.centsPerMinute;
        return this.amountLeft;
    }

    getRemainingMinutes() {
        //this.remainingMinutes = this.amountLeft/this.centsPerMinute;
        
        if(this.remainingMinutes <= 0) {
            return 0;
        } else {
            return Math.floor(this.remainingMinutes);
        }
    }

    useMinutes(minutesUsed) {
        this.remainingMinutes -= minutesUsed;
        return minutesUsed;
    }
}

export default CallingCard;