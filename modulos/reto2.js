function depositarDinero(saldoInicial){
    let deposito = parseInt(prompt("¿Que cantidad desea ingresar?"))
    if(deposito > 0){
        saldoInicial += deposito;
        console.log(`Deposito EXITOSO.
Su nuevo saldo es: ${saldoInicial}`);
        alert(`Deposito EXITOSO.
Su nuevo saldo es: ${saldoInicial}`);
    }
    else{
        console.log("Cantidad INVÁLIDA.");
        alert("Cantidad INVÁLIDA.");
    }
    return saldoInicial;
}

function retirarDinero(saldoInicial){
    let retiro = parseInt(prompt("¿Cuanto desea retirar?."))
    if(retiro > 0 && retiro <= saldoInicial){
        saldoInicial -= retiro;
        console.log(`Retiro EXITOSO.
Su nuevo saldo es: ${saldoInicial}`);
        alert(`Retiro EXITOSO.
Su nuevo saldo es: ${saldoInicial}`)
    }
    else{
        console.log("ERROR, No puede retirar esa cantidad.");
        alert("ERROR, No puede retirar esa cantidad.");
    }
    return saldoInicial;
}

function consultarSaldo(saldoInicial){
    console.log(`Tu saldo actual es: ${saldoInicial}.`);
    alert(`Tu saldo actual es: ${saldoInicial}.`);
    
}

function operacionesBancarias() {
    let saldoInicial = 1094000;
    let seguir = true;
  
  while (seguir) {
    let opcion = prompt("¿Qué deseas hacer? (depositar / retirar / consultar / salir)").toLowerCase();

    if (opcion === "depositar") {
      saldoInicial = depositarDinero(saldoInicial);
    } else if (opcion === "retirar") {
      saldoInicial = retirarDinero(saldoInicial);
    } else if (opcion === "consultar") {
      consultarSaldo(saldoInicial);
    } else if (opcion === "salir") {
      seguir = false;
      console.log("Gracias por usar el sistema. Saldo final: " + saldoInicial);
      alert("Gracias por usar el sistema. Saldo final: " + saldoInicial);
    } else {
      console.log("Opción NO válida.");
      alert("Opción NO válida.");
    }
  }
}

export { operacionesBancarias }