let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("btn-vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

const agregarAlCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));
  lista.innerHTML += `<li>${producto.value}  $${Number(precio.value)}</li>`;
  producto.value = "";
  precio.value = "";
};

const calcularTotal = () => {
  suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  if (suma <= 2500) {
    total.innerHTML = suma;
  } else {
    total.innerHTML = suma * 0.9;
  }
};

const vaciarCarrito = () => {
  total?.innerHTML = "";
  lista?.innerHTML = "";
  productos = [];
  precios = [];
};

agregar.addEventListener("click", agregarAlCarrito);
calcular.addEventListener("click", calcularTotal);
vaciar.addEventListener("click", vaciarCarrito);
