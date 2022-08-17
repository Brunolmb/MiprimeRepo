let numero: number = Number(prompt("ingrese un valor"));
let divisores: number = 0;

let esMultiplo = (dato1, dato2): boolean => {
  return dato1 % dato2 === 0;
};

let sonDivisores = (numeroIngresado): number => {
  for (let i: number = 0; i < numeroIngresado; i++) {
    if (esMultiplo(numeroIngresado, i)) {
      divisores++;
    }
  }
  return divisores;
};
sonDivisores(numero);
console.log("la cantidad de divisores es: " + divisores);
