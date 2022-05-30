import {Account} from "./signup.js";

let btnLogin=document.getElementById('log-in') as HTMLButtonElement;
btnLogin.addEventListener('click',login);

function getDataLocal(): Account[] | null {
        return JSON.parse(localStorage.getItem('acc'));
}
function saveData(newData) {
        localStorage.setItem('acc', JSON.stringify(newData));
}


function login(){
        let flag=false;
        let data=getDataLocal();
        let _name=document.getElementById('form2Example1') as HTMLInputElement;
        let _pass=document.getElementById('form2Example2') as HTMLInputElement;
        for (let i = 0; i < data.length; i++) {
                if(data[i]._name==_name.value && data[i]._pass==_pass.value){
                        flag=true;
                        (document.getElementById('form2Example1') as HTMLInputElement).value='';
                        (document.getElementById('form2Example2') as HTMLInputElement).value='';
                        window.location.href='./index.html';
                }
        }
        if(flag==false){
                (document.getElementById('form2Example1') as HTMLInputElement).value='';
                (document.getElementById('form2Example2') as HTMLInputElement).value='';
                alert('Sai tên đăng nhập hoặc mật khẩu');
        }
}
