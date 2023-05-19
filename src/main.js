class Student{
    constructor(name, lastname, age, courses, grades){
        this.name = name,
        this.lastname = lastname,
        this.age = age,
        this.courses = courses,
        this.grades = grades
    }
    
}

const student1 = new Student("John", "Cena", 26, ["Español", "Ingles"], [9,8])
const student2 = new Student("Rick", "Roberts", 31, ["Ciencias", "Python"], [7,9])
const student3 = new Student("Will", "Downey", 36, ["Artes", "Pintura"], [10,10])
const student4 = new Student("Pedro", "Richards", 41, ["Animacion", "Servicio"], [8,7])

var allStudents = [];
var localStorageData = localStorage.getItem("students");

if (localStorageData) {
  allStudents = JSON.parse(localStorageData);
} else {
  allStudents.push(student1, student2, student3, student4);
  localStorage.setItem("students", JSON.stringify(allStudents));
}

var table = document.getElementById("studentsTable");

for (var i = 0; i < allStudents.length; i++) {
  var newRow = table.insertRow(table.rows.length);
  var student = allStudents[i];

  var nameCell = newRow.insertCell(0);
  nameCell.innerHTML = student.name;

  var lastnameCell = newRow.insertCell(1);
  lastnameCell.innerHTML = student.lastname;

  var ageCell = newRow.insertCell(2);
  ageCell.innerHTML = student.age;

  var coursesCell = newRow.insertCell(3);
  coursesCell.innerHTML = student.courses.map(course => course + "<br>").join("");

  var gradesCell = newRow.insertCell(4);
  gradesCell.innerHTML = student.grades.map(grade => grade + "<br>").join("");
}

localStorage.setItem("students", JSON.stringify(allStudents));

