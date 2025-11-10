function nombreEstudiante() {
    let estudiante = prompt("Ingrese el nombre del estudiante:")
}

function calcularPromedio(){
  let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
  let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
  let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

  return (nota1 + nota2 + nota3) / 3;
}

function validarPromedio(promedio){
    if (promedio >= 3.2) {
     return "Aprobado con éxito."
    }
    else{
        return "Reprobado."
    }
}

function mensajeFinal(){
    let nombre = prompt("Ingrese el nombre del estudiante:")
    let promedio = calcularPromedio()
    let resultado = validarPromedio(promedio)

    console.log(`El estudiante ${nombre},
consiguió un promedio de ${promedio.toFixed(1)}. 
Su resultado es: ${resultado}`);
    
}

export { nombreEstudiante, calcularPromedio, validarPromedio, mensajeFinal}