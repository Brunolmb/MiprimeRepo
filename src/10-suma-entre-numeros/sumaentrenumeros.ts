let numero1: number = Number(prompt("ingrese el primer numero"));
let numero2: number = Number(prompt("ingrese el segundo numero"));
let suma: number = 0;

for (
  let variableDeControl: number = numero1;
  variableDeControl <= numero2;
  variableDeControl++
) {
  suma = suma + variableDeControl;
}

console.log("el resultado es:" + suma);
