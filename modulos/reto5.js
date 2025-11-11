// Función tradicional: crear un contacto
function crearContacto(nombre, telefono, correo) {
  // Retorna un objeto con la info del contacto
  return { nombre: nombre, telefono: telefono, correo: correo };
}

// Función flecha: buscar un contacto por nombre
const buscarContacto = (lista, nombre) => {
  for (let contacto of lista) {
    if (contacto.nombre.toLowerCase() === nombre.toLowerCase()) {
      return contacto; // si lo encuentra, lo devuelve
    }
  }
  return null; // si no lo encuentra, devuelve null
};

// Función flecha: mostrar todos los contactos
const mostrarAgenda = (lista) => {
  console.log("Mi agenda de contactos:");
  for (let contacto of lista) {
    console.log(`${contacto.nombre} → Tel: ${contacto.telefono}, Correo: ${contacto.correo}`);
  }
};

// Función principal: organiza todo el sistema
function sistemaAgenda(contactos) {
  // Primero mostramos la agenda completa
  mostrarAgenda(contactos);

  // Luego pedimos un nombre para buscar
  const nombreBuscado = prompt("Escriba el nombre del contacto que quiere buscar:");
  const resultado = buscarContacto(contactos, nombreBuscado);

  if (resultado) {
    alert(`Contacto encontrado:\n${resultado.nombre}\nTel: ${resultado.telefono}\nCorreo: ${resultado.correo}`);
  } else {
    alert("Ese contacto no está en la agenda.");
  }
}

export { crearContacto, sistemaAgenda };
