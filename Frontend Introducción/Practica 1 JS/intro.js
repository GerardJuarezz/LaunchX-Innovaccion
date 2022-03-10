console.log("\n*****Variables*****");
var numero1 = 4;
var numlet= "4";
var numero2;
numero2 = 2;
console.log(numero1)
//Aquí podemos observar como se implementa la concatenación//
console.log("numero1: "+ numero1 + "numero2:" + numero2);

//De igual manera se puede colocar de esta manera las variables//
var numero3 = 7;
console.log(numero3);

var frase1;
frase1 = "Ejemplo comillas dobles";
var frase2;
frase2 = 'Ejemplo comillas simples';
var frase3;
frase3 = `Ejemplo comillas invertidas`;

console.log(frase1);

//Concatenación
console.log(frase1 + "\n" + frase2 +"\n" + frase3);

//Para meter variables dentro de las comillas invertidas utilizamos ${}
frase4 =`Ejemplo con las comillas ${numero2} invertidas`;
console.log(frase1 + "\n" + frase2 +"\n" + frase3 + "\n" + frase4);

console.log("\n*****Condicionales*****\n");
console.log(numero1 > numero2);

//Se utiliza un igual para revisar el valor
//Dos iguales para revisar valores y contexto
//Tres iguales para revisar valor, contexto y tipo de variable
console.log(numero1 = numero2);
console.log(numero1 == numero2);
console.log(numero1 === numero2);

console.log(numero1 = numlet);
console.log(numero1 == numlet);
console.log(numero1 === numlet);

console.log("\n*****Operador logico AND*****\n");
console.log(true && false);
console.log(true && true);

console.log("\n*****Operador logico OR*****\n");
console.log(true || false);

//A los arreglos tambien se les llaman vectores
console.log("\n*****Arreglos o Vectores*****\n");
let listaDeNumeros = [2,3,5,7,11,234];
//La diferencia entre let y var es que let se va ocupar solamente cuando se ocupa un bloque de código que puede ser un if, for, etc. y var
//es para hacer una varible que poamos utilizar en cualquier momento.
//Const es una variable que no cambia de valor y se convierte en una constante.

console.log(listaDeNumeros[0]);

//Push es una función que tienen los arreglos para ingresar un valor adicional
listaDeNumeros.push(17);

console.log(listaDeNumeros);

//Puede ser tambien un vector de tipo String
let listaDePalabras = ["Gerard", "Mision", "Capitan"];
console.log(listaDePalabras);

//Las cadenas se pueden utilizar como un arreglo

let palabra = "Gerard";
console.log(palabra[2]);
//Saber la longitud de la cadena y de esta manera nos permite encadenar funciones y se le llama anidación de funciones
console.log(palabra.length);

console.log("\n*****Objetos*****\n");
let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@inova.com",
    numReg: "12345",
    mision: "Front",
    proyectos: ["proyecto intro", "proyecto html", "Pasteleria", "Vacunación" ],
    proPer:{
        escolar:"Tareas",
        Profesional: "Trabajo",
        personal: "Negocios"

    }
}

console.log(explorer);
console.log(explorer.email);

//Esto nos ayuda a consumir API JSON

console.log(explorer.proPer);