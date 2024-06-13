// Precedencia Operaciones

/**
 * 1. Paréntesis y Corchetes
 * 2. Operadores unarios, como -, **, --, !
 * 3. Aritméticos *, / y %
 * 4. Aritméticos * y -
 * 5. Relacionales <, <=, > y >=
 * 6. Igualdad == y !=
 * 7. Lógicos && y ||
 * 8. Asignación =, =+, -=, =, etc
 */

// Ej. Se revisa de izq a der
let a = 12 / 3 + 2 * 3 - 1;
// Paso 1. división 12 / 3 = 4
// Paso 2. multiplicación 2 * 3 = 6
// Paso 3. suma 4 + 6 = 10
// Paso 4. resta 10 - 1 = 9
console.log(a);

let b = 12 / (3 + 2) * 3 - 1;
// Paso 1. suma 3 + 2 = 5
// Paso 2. división 12 / 5 = 2.4
// Paso 3. multiplicación 2.4 * 3 = 7.2
// Paso 4. resta 7.2 - 1 = 6.2
console.log(b);
