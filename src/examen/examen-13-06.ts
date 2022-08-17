//se declaran los arreglos y variables a utilizar
/*
let vendedores :string []=("camila,franco,sofia,matias,agustina");
let vendedor1 : number[]= [32558, 36165, 34240, 39273,   34360, 21347, 20869, 21493,   23062, 31908, 30369, 30652];
let vendedor2 : number[]=[27520, 31480, 24053, 34823,   32942, 38477, 23756, 21413,   26699, 22045, 25625, 26855]; 
let vendedor3 : number[]=[20584, 33473, 34300, 24598,   33955, 24040, 39173, 25542,   25105, 26759, 29790, 36218]; 
let vendedor4 : number[]=[27243, 38774, 21246, 30691,   24542, 39771, 31807, 31641,   20850, 29837, 37182, 28006];
let vendedor5 : number[]=[23334, 32687, 25217, 26844,   27033, 35244, 25702, 25781,   35525, 34874, 38842, 20562];

//venta maxima, ejercicio 1

let calcularVentaMaxima =(v:number ;sieteDias:number)=>{
  for (let i: number = 0; i < sieteDias; i++) {
    sieteDias[i]

*/

let elem, arr, nro, ocu;
elem: Number = Number(prompt("Ingrese tamaño: "));
arr = new Array(elem);
cargar(arr, elem);
nro: Number = prompt("Ingrese numero: ");
ocu = metodo(arr, elem, nro);
console.log("El número " + nro + " ... " + ocu);
mostrar(arr, elem);
function cargar(v, l) {
  for (let i: string = 0; i < l; i++) v[i] = Math.floor(Math.random() * 100);
}
function mostrar(v, l): void {
  let c = "";
  for (let i: number = 0; i < l; i++) c += v[i] + " ";
  console.log(c);
}
function metodo(v, l, n): number {
  let oc;
  for (let i = 0; i < l; i++) if ((v[i] = n)) oc++;
}
