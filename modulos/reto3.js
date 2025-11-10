function calcularSubtotal(cantidad, precio) {
  return cantidad * precio;
}

function calcularIVA(subtotal) {
  return subtotal * 0.19;
}

const mostrarFactura = (productos) => {
  let totalSinIVA = 0;

  console.log("Resumen de su Factura:");

  for (let producto of productos) {
    let subtotal = calcularSubtotal(producto.cantidad, producto.precio);
    console.log(`${producto.nombre}: ${producto.cantidad} x $${producto.precio} = $${subtotal}`);
    alert(`${producto.nombre}: ${producto.cantidad} x $${producto.precio} = $${subtotal}`)
    totalSinIVA += subtotal;
  }

  let iva = calcularIVA(totalSinIVA);
  let totalConIVA = totalSinIVA + iva;

  console.log(`Total sin IVA: $${totalSinIVA}`);
  console.log(`IVA (19%): $${iva}`);
  console.log(`Total a pagar: $${totalConIVA}`);

  alert(`Total sin IVA: $${totalSinIVA}\nIVA (19%): $${iva}\nTotal a pagar: $${totalConIVA}`);
};

export { mostrarFactura };