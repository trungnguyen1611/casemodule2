import {Student} from "./Student.js";
import {deleteStudent} from "./Main.js";

export class StudentManager {

    constructor() {
    }

    add(code: string, name: string, sclass: string, email: string) {
        let student = new Student(code, name, sclass, email);
        let data = this.getDataLocal();
        if (!data) {
            data = [];
        }
        data.push(student);

        this.saveData(data);
        this.showList();
    }

    showList() {
        let html = '';
        this.sort();
        let data = this.getDataLocal();
        if (data.length == 0) {
            html += `<tr>`;
            html += `<td colspan="5"><i>Không có dữ liệu</i></td>`;
            html += `</tr>`;
        } else {
            for (let i = 0; i < data.length; i++) {
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
                html += `<td><button data-target="#editStudentModal" value="${i}" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button></td>`;
                html += `<td><button data-target="#deleteStudentModal" value"${i}" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button></td>`;
                html += `</tr>`;
            }
        }
        document.getElementById('list-student').innerHTML = html;
    }

    destroy(index) {
        let data = this.getDataLocal();
        data.splice(index, 1);
        this.saveData(data);
        this.showList();
    }

    getDataLocal(): Student[] | null {
        return JSON.parse(localStorage.getItem('listStudent'));
    }

    saveData(newData) {
        localStorage.setItem('listStudent', JSON.stringify(newData));
    }

    sort() {
        let data = this.getDataLocal();
        data.sort((a, b) =>{
            // @ts-ignore
            return a._name.localeCompare(b._name);
        })
        this.saveData(data);
    }
}





