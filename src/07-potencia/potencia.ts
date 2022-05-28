let base = document.getElementById("base");
let exp = document.getElementById("exp");
let btnCalcular = document.getElementById("calcular");

let potencia = (base: number, expo: number): number => {
  let resultado: number = 0;

  if (base >= 0 && expo >= 0) {
    resultado = base ** expo;
  } else if (base < 0) {
    console.log("La base no puede ser negativa");
  } else {
    console.log("El exponente no puede ser negativo");
  }

  return resultado;
};

btnCalcular.addEventListener("click", () => {
  let resultado: number = potencia(Number(base.value), Number(exp.value));
  console.log(resultado);
});
