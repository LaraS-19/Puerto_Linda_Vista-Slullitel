// alert ()

let saldo = 5000

function seleccionarOperacion () {
    console.log ("1: Consultar saldo")
    console.log ("2: Retirar dinero")
    console.log ("3: Salir")

    let op = prompt ("Ingresar operación")
    switch(op) {
        case "1": 
            consultarSaldo()
            break;
        case "2":
            let monto = Number(prompt ("Monto a retirar:"))
            retirarDinero(monto)
            break;
        case "3":
            salir()
            break;
        default:
            console.log("Operación inválida")
    }
}

function validarClave(clave) {
    if (clave === "1111") {
        seleccionarOperacion ()
    } else {
        alert ("Clave incorrecta")
    }
}

function salir() {
    alert ("Fin del proceso")
}

function consultarSaldo() {
    alert("Su saldo es de" + " " + saldo)
    seleccionarOperacion()
}

function retirarDinero(monto) {
    if (monto > saldo) {
        alert ("Saldo insuficiente")
    } else {
        saldo -= monto
    }
    seleccionarOperacion();
}

function ingresarClave(tarjeta) {
    if(tarjeta) {
        let clave = prompt ("Ingresá tu clave")
        validarClave(clave)
    } else {
        alert("Es necesario ingresar una tarjeta")
    }
}

function entrarAlCajero() {
    let tarjeta = confirm ("Ingrese su tarjeta")
    ingresarClave (tarjeta)
}

entrarAlCajero()