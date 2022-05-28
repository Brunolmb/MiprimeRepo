let btnMultiplicar = document.getElementById("Multiplicar");
let base = document.getElementById("dato1");
let altura = document.getElementById("dato2");

btnMultiplicar.addEventListener("click", () => {
  let resultado: number = Number(base.value) * Number(altura.value);
  console.log("el resultado es", resultado);
});
