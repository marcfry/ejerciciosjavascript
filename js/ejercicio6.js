let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
if (numero1 > numero2) {
    document.write(numero1);
} else if (numero1 == numero2) {
    document.write("Los números son iguales");
} else {
    document.write(numero2);
}