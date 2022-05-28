let clave: string;
let contador: number = 1;

while (contador <= 3 && clave !== "eureka") {
  contador++;
  clave = prompt("ingrese la clave");
}
if (clave === "eureka") {
  console.log("la clave es correcta");
} else {
  console.log("agotaste los intentos");
}
