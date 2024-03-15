export class BmoSavingsAccount {

    private _balance: number;


    getBalance(): number {
        return this._balance
    }

    Withdrawl(value:number):number {
        if (value > 0) {
        this._balance -= value;
        return this._balance
    }
    return this._balance

}

    Deposit(value:number):number {
        if (value > 0) {
        this._balance += value;
        return this._balance
    }
    return this._balance

}


}


crypto.randomUUID