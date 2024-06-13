// 'use strict' // Para restringir el hoisting se puede utilizar esta regla.

// Hoisting
// Significa que podemos utilizar una variable y luego declararla

//var x; // 1. Declarar la variable
x = 10; // 2. Inicializamos la variable

console.log(x);

var x;

// Si trabajamos con let no funciona igual
// let y = 10;

// console.log(y);

// var y;

// ----------
y = 10;
console.log(y);

let y;

// El concepto sólo puede ser utilizado con var, pero se recomienda mejor usar let, para que todas las variables esten al inicio y luego se utilicen.
