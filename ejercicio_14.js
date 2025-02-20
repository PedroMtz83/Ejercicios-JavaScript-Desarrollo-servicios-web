// Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".
function promesaResuelta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
            }, 2000);
            });
        }
promesaResuelta().then(resultado => {
    console.log(resultado);
});
