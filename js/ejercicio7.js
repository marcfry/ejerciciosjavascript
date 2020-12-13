let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write(numero1);
} else if (numero2 > numero3) {
    document.write(numero2);
} else {
    document.write(numero3);
}