import {Student} from "./Student";

export class Account {
    _name: string;
    _pass: string;

    constructor(name: string, pass: string) {
        this._name = name;
        this._pass = pass;
    }
}

let btnSign = document.getElementById('sign_up') as HTMLButtonElement;
btnSign.addEventListener('click', signUp);


function getDataLocal(): Account[] | null {
    return JSON.parse(localStorage.getItem('acc'));
}

function saveData(newData) {
    localStorage.setItem('acc', JSON.stringify(newData));
}

function signUp() {
    let data = getDataLocal();
    let _name = document.getElementById('form3Example3') as HTMLInputElement;
    let _pass = document.getElementById('form3Example4') as HTMLInputElement;
    let flag = false;
    if (!data) {
        data = [];
        if(_name.value && _pass.value) {
            flag = true;
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            if (_name.value == data[i]._name) {
                flag=false;
                (document.getElementById('form3Example3') as HTMLInputElement).value='';
                (document.getElementById('form3Example4') as HTMLInputElement).value='';
                alert('Tài khoản đã tồn tại');
                return;
            }else if(_name.value !="" && _pass.value !=""){
                flag=true;
            }
        }
    }
    if(flag=true){
        let account = new Account(_name.value, _pass.value);
        data.push(account);
        saveData(data);
        (document.getElementById('form3Example3') as HTMLInputElement).value='';
        (document.getElementById('form3Example4') as HTMLInputElement).value='';
        window.location.href='./login.html';
    }

}