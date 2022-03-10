console.log("\n*****Variables*****");
var numero1 = 4;
var numero2;
numero2 = 2;
console.log("numero1: "+ numero1 + "numero2:" + numero2);

var frase1;
frase = "Ejemplo comillas dobles";
var frase2;
frase2 = "Ejemplo comillas dobles";
var frase3;
frase3 = "Ejemplo comillas dobles";

console.log(frase1);

console.log("\n*****Condicionales*****\n");
console.log(numero1 > numero2);

console.log("\n*****Operador logico AND*****\n");
console.log(true&&false);

console.log("\n*****Operador logico OR*****\n");
console.log(true || false);

console.log("\n*****Arreglos o Vectores*****\n");
let listaDeNumero = [2,3,5,7,11,234];

console.log(listaDeNumero[0]);

listaDeNumero.push(16);
listaDeNumero.push(939);

console.log(listaDeNumero);

let listaDePalabras = ["Explorer, Mission"];
console.log(listaDePalabras);

console.log("\n*****Objetos*****\n");
let explorer = {
    nombre: "Nombre del explorer",
    email: "emai@innovaccion.com",
    numReg: 12345,
    mision: "Front"
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
    proPer:{
        escolar:"Tareas",
        profesional:"Trabajo",
        personal: "Negocio"
    }
};

console.log(explorer);


