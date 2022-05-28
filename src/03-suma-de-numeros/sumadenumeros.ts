let btnSumar = document.getElementById("sumar");
let primerNumero = document.getElementById("dato1");
let segundoNumero = document.getElementById("dato2");

btnSumar.addEventListener("click", () => {
  let resultado: number =
    Number(primerNumero.value) + Number(segundoNumero.value);
  console.log("el resultado es", resultado);
});
