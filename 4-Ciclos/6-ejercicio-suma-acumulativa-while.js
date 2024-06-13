// Ejercicio acumulador suma
/**
 * Realizar la suma de los primeros 
 * 5 números utilizando un ciclo while.  
 * 
 * 1 + 2 + 3 + 4 + 5 -> 15
 *   3   + 3   |   |      
 *       6   + 4   |      
 *          10   + 5      
 *              15        
 */

let numero = 1, maximo = 5, acumuladorSuma = 0;
while (numero <= maximo) {
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${numero}`)

    // Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++
}
console.log(acumuladorSuma);



