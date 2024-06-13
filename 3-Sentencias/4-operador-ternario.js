// Operador ternario
// Es una simplificación de la sentencia if/else
// Normalmente se usa para un código simplificado, si el código abarca una línea
// (condición)?caso_verdadero:caso_falso

let miNumero = 0;

(miNumero > 0) ? console.log(`Es positivo`) : console.log(`Es negativo`);
(miNumero > 0) ? console.log(`Es positivo`) : miNumero == 0 ? console.log(`Es cero`) : console.log(`Es negativo`);
