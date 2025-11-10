import {mensajeFinal,
operacionesBancarias,
mostrarFactura,

 } from "./modulos/index.js";

//  mensajeFinal()

// operacionesBancarias()

// Lista predefinida de productos
const productos = [
  { nombre: "Pan", precio: 1000, cantidad: 4 },
  { nombre: "Leche", precio: 3600, cantidad: 2 },
  { nombre: "Huevos", precio: 800, cantidad: 12 },
  { nombre: "Aceite", precio: 18000, cantidad: 2 },
  { nombre: "Shampoo", precio: 22000, cantidad: 1 },
  { nombre: "Papel Higienico", precio: 2000, cantidad: 12 }
];

mostrarFactura(productos);