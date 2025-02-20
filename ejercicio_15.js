// Modifica la función del ejercicio anterior para que use async y await.
function promesaResuelta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
            }, 2000);
            });
}
//usar async y await
async function ejecutarPromesa() {
    const resultado = await promesaResuelta();
    console.log(resultado);
}

ejecutarPromesa();
