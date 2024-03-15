class RbcBankUser {

    private _cheBal:number;
    private static _bankName:string = "RBC"

    constructor(cheBal:number) {
        this._cheBal = cheBal
    }

    static get bankName () {
        return RbcBankUser._bankName
    }


    deposit(amount:number): void {
        if(amount > 0) {
        this._cheBal += amount
    }
}

    withdraw(amount:number): void {
        if(this._cheBal < amount) {
            throw new Error("you have insufficient funds")
        }
        this._cheBal -= amount
    }

    get cheBal():number {
        return this._cheBal
    }
}

const example = new RbcBankUser (45)

export {RbcBankUser}