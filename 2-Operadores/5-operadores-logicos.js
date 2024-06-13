// Operadores Lógicos
/**
 * &&
 * 
 * true && true = false
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * ||
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 * 
 * ! not (NO)
 * Ej: !x invertirá su valor
 * 
 * !true = false
 * !false = true
 */

// Ejemplos
let a = false;
let b = true;
console.log(a);
console.log(b);


// Operador lógico && (and o Y)
// regresa verdadero si ambos operandos son verdaderos
console.log(`${a} && ${b} -> ${a && b}`)

// Operador l+ogico || (or o O)
// sólo regresa falso cuando ambos son falsos, de lo contrario siempre será verdadero
console.log(`${a} || ${b} -> ${a || b}`)

// Operador | (not o NO)
// Invierte el valor original, true -> false, false -> true
console.log(`${a} -> ${!a}`)
