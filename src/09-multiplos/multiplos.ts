let multiplos: string = " ";
let contador: number = 0;

for (contador = 1; contador <= 100; contador++) {
  if (contador % 2 === 0 || contador % 3 === 0) {
    multiplos = multiplos + " " + contador;
  }
}
console.log("los multiplos son:" + multiplos);
