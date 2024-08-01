var student1 = {
    firstName: "Aaron",
    lastName: "Saaka",
    age: 26,
    location: "Tamale"
};
var student2 = {
    firstName: "Reggie",
    lastName: "Doe",
    age: 37,
    location: "Accra"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "green";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid green";
    locationCell.style.border = "1px solid green";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
