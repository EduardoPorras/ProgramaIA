//Mi primer programa en Java Script: Eduardo Javier Porras Herrera 
//NOTA Siempre guardar primer el archivo antes de ejecutar: ctrl+s

//Declaracion de variable con var NOTA con var si se pueden cambiar las variables 
var num =11;  
//Esta funcion es para mostrar en la terminal 
console.log(num);

// Declaracion de una constante con const NOTA esta variable no puede modificarse
const msg= "Hello world";
console.log(msg);

//Ejemplo 1 Caracteristicas de una persona

/*
const nombre= "Eduardo Javier";
const apellidoPaterno="Porras";
const apellidoMaterno= "Herrera";
var edad= 19;
const lugarNaciemiento= "Mexico";
console.log("hola soy:",nombre,apellidoMaterno,apellidoPaterno,edad,lugarNaciemiento);
*/
// Boolean
var boleean= true;
var booleano= false; 

//Null es nulo
var valornulo=null; 

//Valor indefinido NOTA despues se lo puedes poner 
var indefinido;
indefinido="Ya tengo valoor";
console.log(indefinido);

//Array es arreglo conjunto de valores 
const arrayNumbers= [10,20,30,40,50];
const arrayText=["Porras","Tomas","Lara"];
const arrayMix=[11,"Eduardo",20,"Tomas"];
console.log(arrayMix);

//Object es objeto
var persona={
    nombre:"Tomas",
    apellidoPaterno:"Porras",
    apellidoMarerno:"Herrera",
    edad:18,
    lugarNacimiento:"Mexico"
}

