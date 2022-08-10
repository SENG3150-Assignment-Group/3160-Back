class Account{
    accountId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(
        accountId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string
    )
    {
        this.accountId = accountId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // Getters
    public getAccountId = (): number => {
        return this.accountId;
    }
    public getFirstName = (): string => {
        return this.firstName;
    }
    public getLastName = (): string => {
        return this.lastName;
    }
    public getEmail = (): string => {
        return this.email;
    }
    public getPassword = (): string => {
        return this.password;
    }

    // Setters
    public setAccountId = (accountId: number) => {
        this.accountId = accountId;
    }
    public setFirstName = (firstName: string) => {
        this.firstName = firstName;
    }
    public setLastName = (lastName: string) => {
        this.lastName = lastName;
    }
    public setEmail = (email: string) => {
        this.email = email;
    }
    public setPassword = (password: string) => {
        this.password = password;
    }
}