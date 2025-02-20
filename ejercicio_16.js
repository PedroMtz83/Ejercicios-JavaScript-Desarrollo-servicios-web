//expresiones regulares: Crea una función que valide si una cadena de texto es un correo electrónico válido.
//La función debe devolver true si la cadena es un correo electrónico válido y false en caso contrario
function validarCorreo(correo) {
    let patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return patron.test(correo);
        }
        console.log(validarCorreo("correo@dominio.com")); 
        console.log(validarCorreo("correo.dominio.com")); 
       