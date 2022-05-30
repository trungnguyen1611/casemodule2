var btnLogin = document.getElementById('log-in');
btnLogin.addEventListener('click', login);
function getDataLocal() {
    return JSON.parse(localStorage.getItem('acc'));
}
function saveData(newData) {
    localStorage.setItem('acc', JSON.stringify(newData));
}
function login() {
    var flag = false;
    var data = getDataLocal();
    var _name = document.getElementById('form2Example1');
    var _pass = document.getElementById('form2Example2');
    for (var i = 0; i < data.length; i++) {
        if (data[i]._name == _name.value && data[i]._pass == _pass.value) {
            flag = true;
            document.getElementById('form2Example1').value = '';
            document.getElementById('form2Example2').value = '';
            window.location.href = './index.html';
        }
    }
    if (flag == false) {
        document.getElementById('form2Example1').value = '';
        document.getElementById('form2Example2').value = '';
        alert('Sai tên đăng nhập hoặc mật khẩu');
    }
}
export {};
//# sourceMappingURL=login.js.map