import { StudentManager } from "./StudentManager.js";
var studentManager = new StudentManager();
studentManager.showList();
var btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', save);
var btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', search);
// let btnDelete=document.getElementById('btn-delete') as HTMLButtonElement;
// btnDelete.addEventListener('click',deleteStudent);
export function save() {
    var code = document.getElementById('input-add-code').value;
    var name = document.getElementById('input-add-name').value;
    var group = document.getElementById('input-add-class').value;
    var email = document.getElementById('input-add-email').value;
    studentManager.add(code, name, group, email);
    document.getElementById('input-add-code').value = '';
    document.getElementById('input-add-name').value = '';
    document.getElementById('input-add-class').value = '';
    document.getElementById('input-add-email').value = '';
    deleteStudent();
    editStudent();
}
export function search() {
    var html = '';
    var data = studentManager.getDataLocal();
    var code = document.getElementById('input-search-code').value;
    var name = document.getElementById('input-search-name').value;
    var group = document.getElementById('input-search-class').value;
    var email = document.getElementById('input-search-email').value;
    for (var i = 0; i < data.length; i++) {
        // @ts-ignore
        if (name == data[i]._name) {
            // @ts-ignore
            // code == data[i]._code ||
            // @ts-ignore
            // group == data[i]._class ||
            // @ts-ignore
            // email == data[i]._email) {
            html += "<tr>";
            html += "<td>".concat(i + 1, "</td>");
            // @ts-ignore
            html += "<td>".concat(data[i]._code, "</td>");
            // @ts-ignore
            html += "<td>".concat(data[i]._name, "</td>");
            // @ts-ignore
            html += "<td>".concat(data[i]._class, "</td>");
            // @ts-ignore
            html += "<td>".concat(data[i]._email, "</td>");
            html += "<td><button data-target=\"#editEmployeeModal\" value=\"=".concat(i, "\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></button></td>");
            html += "<td><button data-target=\"#deleteEmployeeModal\" value=\"".concat(i, "\" class=\"delete\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Delete\">&#xE872;</i></button></td>");
            html += "</tr>";
        }
    }
    document.getElementById('list-student').innerHTML = html;
    deleteStudent();
    editStudent();
}
export function deleteStudent() {
    var btnDelete = document.getElementsByClassName('delete');
    var _loop_1 = function (i) {
        btnDelete[i].addEventListener('click', function () {
            // btn.addEventListener('click', () => {
            //     let index=btnDelete[i].getAttribute('value');
            var Confirm = confirm("B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a th\u00F4ng tin h\u1ECDc vi\u00EAn n\u00E0y?");
            if (Confirm) {
                studentManager.destroy(i);
                deleteStudent();
                editStudent();
            }
            // });
        });
    };
    // let btn = document.getElementById('btn-delete');
    for (var i = 0; i < btnDelete.length; i++) {
        _loop_1(i);
    }
}
deleteStudent();
export function editStudent() {
    var data = studentManager.getDataLocal();
    var btn = document.getElementById('btn-edit');
    var btnEdit = document.getElementsByClassName('edit');
    var _loop_2 = function (i) {
        btnEdit[i].addEventListener('click', function () {
            // @ts-ignore
            document.getElementById('input-edit-code').value = data[i]._code;
            // @ts-ignore
            document.getElementById('input-edit-name').value = data[i]._name;
            // @ts-ignore
            document.getElementById('input-edit-class').value = data[i]._class;
            // @ts-ignore
            document.getElementById('input-edit-email').value = data[i]._email;
            editStudent();
            btn.addEventListener('click', function () {
                // @ts-ignore
                data[i]._code = document.getElementById('input-edit-code').value;
                // @ts-ignore
                data[i]._name = document.getElementById('input-edit-name').value;
                // @ts-ignore
                data[i]._class = document.getElementById('input-edit-class').value;
                // @ts-ignore
                data[i]._email = document.getElementById('input-edit-email').value;
                studentManager.saveData(data);
                studentManager.showList();
                editStudent();
            });
        });
    };
    for (var i = 0; i < data.length; i++) {
        _loop_2(i);
    }
}
editStudent();
//# sourceMappingURL=Main.js.map