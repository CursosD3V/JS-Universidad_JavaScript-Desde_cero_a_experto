// Ejercicio imprimir los primeros 10 números de 3 en 3
// Salida: 1 | 4 | 7 | 10 Incremental
// Salida: 1 | -3 | -5 | -8 Decremental
let maximo = 10, minimo= -10;

console.log("Incrementos de 3 en 3");
for (let numero = 1; numero <= maximo; numero += 3) {
    console.log(numero);
}

console.log("Decrementos de 3 en 3");
for (let numero = 1; numero >= -10; numero -= 3) {
    console.log(numero);
}