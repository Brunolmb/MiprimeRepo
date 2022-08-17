let nroDeseadoArreglo: number[] = new Array(5);

for (let i: number = 0; i < 5; i++) {
  nroDeseadoArreglo[i] = Number(prompt("ingrese un valor"));
}
console.log(nroDeseadoArreglo);

/*// Algoritmo NumerosDeseados
let nroDeseadoArreglo : number[] = new Array (5);
let nro : number, indice : number;
for (indice = 0; indice < 5; indice++) { 
     nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice}: `));
     nroDeseadoArreglo[indice]  = nro;
}
for (indice = 0; indice < 5; indice++) { 
     console.log(`El número en la posición ${indice} es ${nroDeseadoArreglo[indice]}`);*/
