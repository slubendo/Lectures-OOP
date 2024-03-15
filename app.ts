class User {
    // Fields
    // Accessibility Modifiers
    // Enable data-hiding
    // Acheived strong ecapsulation

    private _username:string;
    private _password:string;

    // constructor
    constructor(private _username:string, private _password:string) {
        // this._password = password
        // this._username = username
    }

    // Methods
    printUserDetails(): void {
        console.log(this._username + '\n' + this._password)
    }

    get username(): string {
        return this._username
    }

    setUsername(value:string):void {
        if (value.length < 4) {
        this._username = value
    }
}
}

const john = new User('john123', '123');
john.setUsername("h")
console.log(john.username);

john.printUserDetails()



