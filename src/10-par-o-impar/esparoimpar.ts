let valor: number = 0;

while (valor <= 0) {
  valor = Number(prompt("ingrese un valor"));
}
if (valor % 2 === 0) {
  console.log("el numero es par");
} else {
  console.log("el numero es impar");
}
