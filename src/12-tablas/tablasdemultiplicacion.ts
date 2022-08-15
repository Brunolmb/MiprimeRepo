let numeroDeTabla: number = Number(prompt("ingrese el numero de la tabla"));
let hastaDonde: number = Number(prompt("ingrese hasta que multiplo desea"));

for (let control = 0; control <= hastaDonde; control++) {
  console.log(numeroDeTabla * control);
}
