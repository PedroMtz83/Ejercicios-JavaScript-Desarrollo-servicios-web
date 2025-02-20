//Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.

let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(function (numero) {
    return numero * numero;
    });
console.log(cuadrados);
