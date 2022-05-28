let numero: number = prompt("ingrese un valor");
let numero2: number = prompt("ingrese otro valor");
let suma: number = prompt("elija una opcion entre 1 y 2");
let resultado: number;

if ((suma = 1)) {
  suma = numero + numero2;
} else if ((suma = 2)) {
  suma = numero - numero2;
} else {
  console.log("la opcion es incorrecta");
}
console.log("el resultado de la operacion es:", resultado + "‘-’");
