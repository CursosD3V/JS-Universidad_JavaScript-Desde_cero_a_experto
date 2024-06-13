// Iterar mmatrices
// Declaración de la matriz
let matriz = [[100, 200, 300], [400, 500, 600]];

// No. Renglones
console.log(matriz.length);

// No.Columnas (depende del renglon selecionado)
console.log(matriz[0].length);
console.log(matriz[1].length);

// Renglones
for (let renglon = 0; renglon < matriz.length; renglon++) {
    // Columnas
    for (let columna = 0; columna < matriz[renglon].length; columna++) {
        console.log(`Elemento [${renglon}][${columna}] = ${matriz[renglon][columna]}`);
    }
}