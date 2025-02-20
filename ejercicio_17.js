//Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.
let texto = "Hola, cómo estás?";
let textoMayus = texto.toUpperCase();
let textoSinComas = textoMayus.replace(/,/g, "");
console.log(textoSinComas);