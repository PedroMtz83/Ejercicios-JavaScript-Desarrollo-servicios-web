//Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no en javascript.
let edad = prompt("Ingrese su edad: ");
edad = Number(edad);
if (edad >= 18) {
    alert("Usted es mayor de edad.");
    } else {
        alert("Usted no es mayor de edad.");
}