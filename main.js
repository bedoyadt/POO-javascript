/* const juan = {
  name: "juan",
  username: "juanddc",
  points: 100,
  socialMedia: {
    twitter: "juanxx",
    instagram: "juanxx",
    facebook: "juanxxx",
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Pratico de HTML y CSS",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo wed",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Pratico de HTML y CSS",
        "curso de responsive design",
      ],
    },
    {
      name: "Escuela de video juegos",
      courses: [
        "Curso Definitivo de viojuegos",
        "Curso Pratico de video juegos",
        "curso de introdiccion a la produccion de video juegos",
      ],
    },
  ],
};

const miguel = {
  name: "miguel",
  username: "miguelddc",
  points: 10000,
  socialMedia: {
    twitter: "miguelxx",
    instagram: "miguelxx",
    facebook: "miguexxx",
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Pratico de HTML y CSS",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo wed",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Pratico de HTML y CSS",
        "curso de responsive design",
      ],
    },
    {
      name: "Escuela de video juegos",
      courses: [
        "Curso Definitivo de viojuegos",
        "Curso Pratico de video juegos",
        "curso de introdiccion a la produccion de video juegos",
      ],
    },
  ],
};
 */
class Course {
  constructor({ name, classses = [] }) {
    this.name = name;
    this.classses = classses;
  }
}
const cursoProgBasica = new Course({
  name: "Curso de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPraticoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}
const escuelaWeb = LearningPaths({
  name: "Es Cuela de Desaroollo Web",
  courses: [
    cursoDefinitivoHTML,
    cursoPraticoHTML,
    "curso de responsive design",
  ],
});
const escuelaData = LearningPaths({
  name: "Es Cuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso Pratico de video juegos",
    "curso de introdiccion a la produccion de video juegos",
  ],
});
const escuelaVgs = LearningPaths({
  name: "Es Cuela de Video Juegos",
  courses: [
    cursoProgBasica,
    "Curso Pratico de video juegos2",
    "curso de introdiccion a la produccion de video juegos3",
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}
const miguel = new Student({
  name: "miguel3",
  username: "migel90909",
  email: "miguel@gmail.com",
  instagram: "migue",
  learningPaths: [escuelaData, escuelaVgs, escuelaWeb],
});
const juan = new Student({
  name: "juan23",
  username: "juanl90909",
  email: "juanl@gmail.com",
  instagram: "julian",
  learningPaths: [escuelaVgs, escuelaWeb],
});
