"use strict";

class Generation {
  // Propiedades privadas
  #generations;
  #defaultGeneration;
  #birthYear

  constructor(birthYear) {
    this.#birthYear = birthYear;

    this.#generations = [
      {
        generation: "Generación Z",
        trait: "Irreverencia",
        timeFrame: { from: 1994, to: 2010 },
      },
      {
        generation: "Generación Y (Millennials)",
        trait: "Frustración",
        timeFrame: { from: 1981, to: 1993 },
      },
      {
        generation: "Generación X",
        trait: "Obsesión por el éxito",
        timeFrame: { from: 1969, to: 1980 },
      },
      {
        generation: "Generación Baby Boom",
        trait: "Ambición",
        timeFrame: { from: 1949, to: 1968 },
      },
      {
        generation: "Generación Silent Generation (Los niños de la posguerra)",
        trait: "Austeridad",
        timeFrame: { from: 1930, to: 1948 },
      },
    ];

    this.#defaultGeneration = {
      generation: "Generación no encontrada",
      trait: "N/D",
      timeFrame: { from: 0, to: 0 },
    };
  }

  // Método para determinar la generación
  #determineGeneration() {
    for (const generation of this.#generations) {
      if (
        this.#birthYear >= generation.timeFrame.from &&
        this.#birthYear <= generation.timeFrame.to
      ) {
        return generation;
      }
    }
    return this.#defaultGeneration;
  }

  // Método get para obtener la generación
  get generation() {
    return this.#determineGeneration();
  }
  // Método get para obtener el año de nacimiento
  get birthYear(){
    return this.#birthYear
  }
}

class Person extends Generation {
  // Propiedades privadas
  #name
  #dni
  #sex
  #age
  #weight
  #height

  constructor(name, age, dni, sex, weight, height, birthYear) {
    super(birthYear);

    this.#name = name;
    this.#age = age;
    this.#dni = dni;
    this.#sex = sex;
    this.#weight = weight;
    this.#height = height;
  }

  // Método get para obtener los datos en un objeto
  get data(){
    return {
      name: this.#name,
      age: this.#age,
      dni: this.#dni,
      sex: this.#sex,
      weight: this.#weight,
      height: this.#height,
      birthYear: this.birthYear
    }
  }
  // Método para obtener los datos en un texto informativo
  showData(){
    return `nombre: ${this.#name}, edad: ${this.#age}, DNI: ${this.#dni}, sexo: ${this.#sex}, peso: ${this.#weight}, altura: ${this.#height}, año de nacimiento: ${this.birthYear}`
  }
  // Método para mostrar la generación
  showGeneration() {
    let generationInfo = this.generation;
    return `${this.#name} pertenece a la ${generationInfo.generation} y su rasgo característico es la ${generationInfo.trait}.`;
  }
  // Método para devuelve si es mayor de edad
  isOlder() {
    if (this.#age >= 18) {
      return { result: true, message: `${this.#name} es mayor de edad` };
    }
    return { result: false, message: `${this.#name} no es mayor de edad` };
  }
    // Método que genera un DNI aleatorio
  generateDni(){
    return Math.floor(Math.random() * 11111111)
  }
}

const person1 = new Person("Susana", 20, 45426789, "M", 60, 1.7, 2003);
const person2 = new Person("María", 35, 87654321, "M", 60, 1.65, 1985);
const person3 = new Person("Juan", 77, 12345678, "H", 70, 1.75, 1947);
const person4 = new Person("Pedro", 17, 12345678, "H", 70, 1.65, 2007);

document.write(person1.showGeneration(), `<br>`);
document.write(person2.showGeneration(), `<br>`);
document.write(person3.showGeneration(), `<br>`);
document.write(person4.isOlder().message, `<br>`);
document.write(person4.showData(), `<br>`);
document.write(person1.generateDni())
