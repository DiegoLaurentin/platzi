const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTMl y CSS",
        "Curso Práctico de HTMl y CSS",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
};

function Student(name, age, matters){
    this.name = name
    this.age = age
    this.matters = cursosAprobados

}

Student.prototype.newMatter = function(matter) {
    this.matters.push(matter)
}

const juanita = new Student(
    "juanita Alejandra", 
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de personajes",
    ]
)

// prototipos con la sintaxis de clases

class student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguelito = new student2(
    "miguel",
    28,
    [
        'Curso de analisis',
        'Curso de principios',
        'Curso de Javascript Basico'
    ]
)

// Podemos recibir un solo parametro que sea de tipo objeto

class student3 {
    constructor({
        name, age, cursosAprobados
    }) {
        this.name1 = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguelito = new student3({
    
})
