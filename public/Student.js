var Student = /** @class */ (function () {
    function Student(code, name, sclass, email) {
        this._code = code;
        this._name = name;
        this._class = sclass;
        this._email = email;
    }
    Object.defineProperty(Student.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (value) {
            this._class = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
export { Student };
//# sourceMappingURL=Student.js.map