import {Student} from "./Student.js";
import {StudentManager} from "./StudentManager.js";

let studentManager = new StudentManager();
studentManager.showList();

let btnAdd = document.getElementById('btn-add') as HTMLButtonElement;
btnAdd.addEventListener('click', save);

let btnSearch = document.getElementById('btn-search') as HTMLButtonElement;
btnSearch.addEventListener('click', search);

// let btnDelete=document.getElementById('btn-delete') as HTMLButtonElement;
// btnDelete.addEventListener('click',deleteStudent);

export function save() {
    let code = (document.getElementById('input-add-code') as HTMLInputElement).value;
    let name = (document.getElementById('input-add-name') as HTMLInputElement).value;
    let group = (document.getElementById('input-add-class') as HTMLInputElement).value;
    let email = (document.getElementById('input-add-email') as HTMLInputElement).value;

    studentManager.add(code, name, group, email);
    (document.getElementById('input-add-code') as HTMLInputElement).value = '';
    (document.getElementById('input-add-name') as HTMLInputElement).value = '';
    (document.getElementById('input-add-class') as HTMLInputElement).value = '';
    (document.getElementById('input-add-email') as HTMLInputElement).value = '';

    deleteStudent();
    editStudent();
}

export function search() {
    let html = '';
    let data = studentManager.getDataLocal();
    let code = (document.getElementById('input-search-code') as HTMLInputElement).value;
    let name = (document.getElementById('input-search-name') as HTMLInputElement).value;
    let group = (document.getElementById('input-search-class') as HTMLInputElement).value;
    let email = (document.getElementById('input-search-email') as HTMLInputElement).value;
    for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        if (name == data[i]._name) {
            // @ts-ignore
            // code == data[i]._code ||
            // @ts-ignore
            // group == data[i]._class ||
            // @ts-ignore
            // email == data[i]._email) {
            html += `<tr>`;
            html += `<td>${i + 1}</td>`;
            // @ts-ignore
            html += `<td>${data[i]._code}</td>`;
            // @ts-ignore
            html += `<td>${data[i]._name}</td>`;
            // @ts-ignore
            html += `<td>${data[i]._class}</td>`;
            // @ts-ignore
            html += `<td>${data[i]._email}</td>`;
            html += `<td><button data-target="#editEmployeeModal" value="=${i}" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button></td>`;
            html += `<td><button data-target="#deleteEmployeeModal" value="${i}" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button></td>`;
            html += `</tr>`;
        }
    }
    document.getElementById('list-student').innerHTML = html;
    deleteStudent();
    editStudent();
}

export function deleteStudent() {
    let btnDelete = document.getElementsByClassName('delete');
    // let btn = document.getElementById('btn-delete');
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', () => {
            // btn.addEventListener('click', () => {
            //     let index=btnDelete[i].getAttribute('value');
            let Confirm = confirm(`Bạn có chắc muốn xóa thông tin học viên này?`);
            if (Confirm) {
                studentManager.destroy(i);
                deleteStudent();
                editStudent();
            }
            // });
        });
    }
}

deleteStudent();

export function editStudent() {

    let data = studentManager.getDataLocal();
    let btn = document.getElementById('btn-edit');
    let btnEdit = document.getElementsByClassName('edit');
    for (let i = 0; i < data.length; i++) {
        btnEdit[i].addEventListener('click', () => {
            // @ts-ignore
            (document.getElementById('input-edit-code') as HTMLInputElement).value = data[i]._code;
            // @ts-ignore
            (document.getElementById('input-edit-name') as HTMLInputElement).value = data[i]._name;
            // @ts-ignore
            (document.getElementById('input-edit-class') as HTMLInputElement).value = data[i]._class;
            // @ts-ignore
            (document.getElementById('input-edit-email') as HTMLInputElement).value = data[i]._email;
            editStudent();

            btn.addEventListener('click', () => {
                // @ts-ignore
                data[i]._code = (document.getElementById('input-edit-code') as HTMLInputElement).value;
                // @ts-ignore
                data[i]._name = (document.getElementById('input-edit-name') as HTMLInputElement).value;
                // @ts-ignore
                data[i]._class = (document.getElementById('input-edit-class') as HTMLInputElement).value;
                // @ts-ignore
                data[i]._email = (document.getElementById('input-edit-email') as HTMLInputElement).value;
                studentManager.saveData(data);
                studentManager.showList();
                editStudent();
            })
        })
    }
}

editStudent();

