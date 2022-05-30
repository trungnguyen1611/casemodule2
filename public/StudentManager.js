import { Student } from "./Student.js";
var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.prototype.add = function (code, name, sclass, email) {
        var student = new Student(code, name, sclass, email);
        var data = this.getDataLocal();
        if (!data) {
            data = [];
        }
        data.push(student);
        this.saveData(data);
        this.showList();
    };
    StudentManager.prototype.showList = function () {
        var html = '';
        this.sort();
        var data = this.getDataLocal();
        if (data.length == 0) {
            html += "<tr>";
            html += "<td colspan=\"5\"><i>Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u</i></td>";
            html += "</tr>";
        }
        else {
            for (var i = 0; i < data.length; i++) {
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
                html += "<td><button data-target=\"#editStudentModal\" value=\"".concat(i, "\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></button></td>");
                html += "<td><button data-target=\"#deleteStudentModal\" value\"".concat(i, "\" class=\"delete\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Delete\">&#xE872;</i></button></td>");
                html += "</tr>";
            }
        }
        document.getElementById('list-student').innerHTML = html;
    };
    StudentManager.prototype.destroy = function (index) {
        var data = this.getDataLocal();
        data.splice(index, 1);
        this.saveData(data);
        this.showList();
    };
    StudentManager.prototype.getDataLocal = function () {
        return JSON.parse(localStorage.getItem('list'));
    };
    StudentManager.prototype.saveData = function (newData) {
        localStorage.setItem('list', JSON.stringify(newData));
    };
    StudentManager.prototype.sort = function () {
        var data = this.getDataLocal();
        data.sort(function (a, b) {
            // @ts-ignore
            return a._name.localeCompare(b._name);
        });
        this.saveData(data);
    };
    return StudentManager;
}());
export { StudentManager };
//# sourceMappingURL=StudentManager.js.map