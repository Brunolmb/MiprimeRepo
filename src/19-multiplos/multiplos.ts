let numero1: number = Number(prompt("ingrese un numero"));
let numero2: number = Number(prompt("ingrese un numero"));

let esMultiplo = (dato1, dato2): boolean => {
  return dato1 % dato2 === 0;
};

if (esMultiplo(numero1, numero2)) {
  console.log("el numero es multiplo");
} else {
  console.log("el numero no es multiplo");
}
