// import { Student } from "./student";

class Student{
    constructor(name, lastname, age, courses, grades){
        this.name = name,
        this.lastname = lastname,
        this.age = age,
        this.courses = courses,
        this.grades = grades
    }
    
}

// RECUPERAR ARRAY allStudents
var storedStudents = localStorage.getItem("students")
var allStudents = storedStudents?JSON.parse(storedStudents): [];

// INSTANCIAMOS ELEMENTOS
const btnCreate = document.getElementById("createStudentBtn")

//LOGICA

function createStudent() {
    
    var name = document.getElementById("nameInput").value;
    var lastname = document.getElementById("lnameInput").value;
    var age = document.getElementById("ageInput").value;

    if (name !== "" && lastname !== "" && age !== "") {
        const newStudent = new Student(name, lastname, age, [], [])
        console.log(newStudent);
        allStudents.push(newStudent);
        console.log(allStudents);
        localStorage.setItem("students", JSON.stringify(allStudents));
    } else {
        alert("Por favor llena los datos")
    }
    
    

}



// CLICK LISTENERS
btnCreate.addEventListener("click", 
createStudent);
