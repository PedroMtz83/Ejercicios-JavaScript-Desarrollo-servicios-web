//Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.
let precios = [10, 20, 30, 40];
let total = precios.reduce((acumulador, valorActual) => acumulador +
 valorActual, 0);
console.log(total);
