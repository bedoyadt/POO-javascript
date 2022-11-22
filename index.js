const natalia = {
  name: "natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Pratico de HTML y CSS",
  ],
  cursosAprobados(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

//prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("juanita peres", 27, [
  "Curso de Introducion a la programacion",
  "Curso de Creacion de Personajes",
]);

//prototipos con la sintaxis de clases
class Student2 {
  constructor({ name, age, cursosAprobados, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobar(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}
const miguel = new Student2({
  name: "miguel peres",
  age: 27,
  cursosAprobados: [
    "Curso de Introducion a la programacion",
    "Curso de Creacion de Personajes",
  ],
});
