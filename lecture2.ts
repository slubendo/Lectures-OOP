import { BmoSavingsAccount } from "./lecture";
import { randomUUID } from "crypto";

class BmoBankMemeber {

    private _memberID: string;
    private _firstName:string;
    private _lastName:string;
    private _savingsAccount:BmoSavingsAccount;
    private _balance!: number;

    constructor (firstname: string, lastname: string, savingAccount:BmoSavingsAccount) {
        this._firstName = firstname
        this._lastName = lastname
        this._savingsAccount = savingAccount
        this._memberID = randomUUID();

    }

    get Balance(): number {
        return this._balance
    }
    get firstname(): string {
        return this._firstName
    }
    get lastname(): string {
        return this._lastName
    }

    setWithdrawl(value:number):number {
        if (value > 0) {
        this._balance -= value;
        return this._balance
    }
    return this._balance

}

    setDeposit(value:number):number {
        if (value > 0) {
        this._balance += value;
        return this._balance
    }
    return this._balance

}



}

const memberSaving = new BmoSavingsAccount

const member = new BmoBankMemeber ('john','smith',memberSaving)


