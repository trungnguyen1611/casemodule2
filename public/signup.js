var Account = /** @class */ (function () {
    function Account(name, pass) {
        this._name = name;
        this._pass = pass;
    }
    return Account;
}());
export { Account };
var alert = document.getElementById('wrong-signup');
alert.hidden = true;
var btnSign = document.getElementById('sign_up');
btnSign.addEventListener('click', signUp);
function getDataLocal() {
    return JSON.parse(localStorage.getItem('acc'));
}
function saveData(newData) {
    localStorage.setItem('acc', JSON.stringify(newData));
}
function signUp() {
    var data = getDataLocal();
    var _name = document.getElementById('form3Example3');
    var _pass = document.getElementById('form3Example4');
    var flag = false;
    if (!data) {
        data = [];
        if (_name.value && _pass.value) {
            flag = true;
        }
    }
    else {
        for (var i = 0; i < data.length; i++) {
            if (_name.value == data[i]._name) {
                flag = false;
                document.getElementById('form3Example3').value = '';
                document.getElementById('form3Example4').value = '';
                alert.hidden = false;
                return;
            }
            else if (_name.value != "" && _pass.value != "") {
                flag = true;
            }
        }
    }
    if (flag = true) {
        var account = new Account(_name.value, _pass.value);
        data.push(account);
        saveData(data);
        document.getElementById('form3Example3').value = '';
        document.getElementById('form3Example4').value = '';
        window.location.href = './login.html';
    }
}
//# sourceMappingURL=signup.js.map