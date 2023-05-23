
var storedStudents = localStorage.getItem("students");
var allStudents = storedStudents ? JSON.parse(storedStudents) : [];



/* DESPLIEGUE DE ALUMNOS */
function deployNames() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.innerHTML = ""; // Limpiar contenido existente
  
  // Generar elementos de lista basados en los estudiantes
  for (var i = 0; i < allStudents.length; i++) {
    var student = allStudents[i];
    var listItem = document.createElement("a");
    listItem.textContent = student.name;
    dropdownContent.appendChild(listItem);

    // Agregar evento click a cada elemento de la lista
    listItem.addEventListener("click", function() {
      document.getElementById("nameDropdown").textContent = this.textContent; // Actualizar texto del botón
      dropdownContent.classList.remove("show"); // Cerrar dropdown
    });
  }

  dropdownContent.classList.toggle("show");

  }

  /* DESPLIEGUE DE MATERIAS */

  // Instanciamos el dropdown
function deployCourses() {
  var dropdownContent = document.getElementById("myCourseDropdown");
  dropdownContent.innerHTML = ""; // Limpiar contenido existente

// Identificamos el index del estudiante seleccionado
const studentSelected = document.getElementById("nameDropdown").textContent
const index = allStudents.findIndex(student => student.name === studentSelected);

// creamos la const del estudiante seleccionado
const selectedStudent = allStudents[index];



// Generar elementos de lista basados en los estudiantes
for (var i = 0; i < selectedStudent.courses.length; i++) {
  var course = selectedStudent.courses[i];
  var listItem = document.createElement("a");
  listItem.textContent = course;
  dropdownContent.appendChild(listItem);

  // Agregar evento click a cada elemento de la lista
  listItem.addEventListener("click", function() {
    document.getElementById("courseDropdown").textContent = this.textContent; // Actualizar texto del botón
    dropdownContent.classList.remove("show"); // Cerrar dropdown
  });
}

dropdownContent.classList.toggle("show");

}

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Instanciar boton
const btnAssignGrade = document.getElementById("assignGradeBtn")

// Obtener valores


// LOGICA DEL BOTON ASIGNAR MATERIA

btnAssignGrade.addEventListener("click", function(){
const studentSelected = document.getElementById("nameDropdown").textContent
const courseSelected = document.getElementById("courseDropdown").textContent
const grade = document.getElementById("gradeInput").value

  // Obtener el índice del alumno seleccionado
  const index = allStudents.findIndex(student => student.name === studentSelected);

  if (index !== -1) {
    // Acceder al objeto del alumno correspondiente
    const selectedStudent = allStudents[index];

    // Agregar courseSelected al array courses del alumno
    selectedStudent.grades.push(grade);

    // Mostrar el resultado en la consola
    console.log("Alumno seleccionado:", selectedStudent, grade);
  } else {
    console.log("No se encontró el alumno seleccionado");
  }

  console.log("Impresion final", allStudents[index]);

  console.log('Comenzando a guardar cambios en db');
  localStorage.setItem("students", JSON.stringify(allStudents));
  console.log('Cambios guardados');
  alert('Cambios guardados')
  function Redirect(){location.href = "index.html"};
  Redirect()
});