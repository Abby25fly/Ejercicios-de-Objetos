// Ejercicio 1 - Área el un Rectángulo
var assert = require("assert");
function Rectangulo (base,altura) {
  this.base = base;
  this.altura = altura;
  this.area =  function () {
    return this.base * this.altura; };
}
var areaRec = new Rectangulo (6,4);
console.log(areaRec); // Rectangulo {base: 6, altura: 4, area: 24}
// Ejercicio 1 - Mocha Test
describe("Área del rectángulo", function (){
	it("24 es el área un rectangulo de 6 por 4", function (){
				assert.equal(24,areaRec.area());
	})
})


// Ejercicio 2 - Edad Actual según fecha de Nacimiento
var assert = require("assert");
function Someone(nombre, dia, mes, nacimiento){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.nacimiento = nacimiento;
  this.edad = function () {
    return `La edad actual de ${this.nombre} es ${2017 - this.nacimiento} años`;
  };
}
var resEdad = new Someone("Sofia", 10,11,2010);
console.log(resEdad.edad()); // 7
// Mocha Test
describe("Edad Actual", function (){
	it("si nació en 2010 tiene 7 años", function (){
				assert.deepEqual("La edad actual de Sofia es 7 años",resEdad.edad());
	})
})

// Ejercicio 3 - Información Personal
var assert = require("assert");
function Person(nombre, edad, pasatiempos) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempos = pasatiempos;
  this.personSays = function() {
    return `hola soy ${this.nombre}, tengo ${this.edad} años y me gusta ${this.pasatiempos}`;
  };
}

const friend = new Person ("Bianca", 6, "jugar y pasear");

console.log(friend.personSays()); // hola soy Bianca, tengo 6 años y me gusta jugar y pasear
// Mocha Test
describe("Personal Information", function (){
	it("Describiendo a una persona", function (){
				assert.equal("hola soy Bianca, tengo 6 años y me gusta jugar y pasear",friend.personSays());
	})
})
