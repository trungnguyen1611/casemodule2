export class Student{
    private _code:string;
    private _name:string;
    private _class:string;
    private _email:string;

    constructor(code: string, name: string, sclass: string, email: string) {
        this._code = code;
        this._name = name;
        this._class = sclass;
        this._email = email;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get class(): string {
        return this._class;
    }

    set class(value: string) {
        this._class = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}