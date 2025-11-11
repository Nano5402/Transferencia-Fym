// Verifica si el número es par o impar
function esPar(numero) {
  // Si el residuo de dividir entre 2 es 0, es par
  return numero % 2 === 0 ? "par" : "impar";
}

// Verifica si el número es positivo, negativo o cero
function esPositivo(numero) {
  if (numero > 0) return "positivo";
  if (numero < 0) return "negativo";
  return "cero"; // caso especial
}

// Verifica si el número es primo
function esPrimo(numero) {
  if (numero <= 1) return "no primo"; // 0 y 1 no son primos
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return "no primo"; // si tiene divisores, no es primo
  }
  return "primo"; // si no se encontró divisor, es primo
}

function analizarNumero(numero) {
  const par = esPar(numero);
  const signo = esPositivo(numero);
  const primo = esPrimo(numero);

  const mensaje = `Análisis del número ${numero}:\n• Es ${par}\n• Es ${signo}\n• Es ${primo}`;
  console.log(mensaje);
  alert(mensaje);
}

export { analizarNumero };
