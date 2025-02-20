//Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.
let edades = [12, 18, 25, 10, 30, 16];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 25, 30]

