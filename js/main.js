const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: 60000,
    puertas: '',
    transmision: '',
    color: ''
}


function mostrarbarcos(barcos){
    barcos.forEach(barco => {
        console.log(`${barco.marca} ${barco.modelo} - ${barco.year} - ${barco.puertas} Puertas - Transmision: ${barco.transmision}`) 
        document.write(`<p>${barco.marca} ${barco.modelo} - ${barco.year} - ${barco.puertas} Puertas - Transmision: ${barco.transmision}</p>`)        

    });
}


function filtrarbarco(){
    const resultado = barcos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    if(resultado.length){
        mostrarbarcos(resultado)
    }else {
        noResultados()
    }
}

function noResultados(){
    console.log("No hay resultados")
    document.write("No hay resultados")
}


function filtrarMarca(barco){
    if(datosBusqueda.marca){
        return barco.marca === datosBusqueda.marca
    }
    return barco;
}

function filtrarYear(barco){
    if(datosBusqueda.year){
        return barco.year === datosBusqueda.year
    }
    return barco;
}

function filtrarMinimo(barco){
    if(datosBusqueda.minimo){
        return barco.precio >= datosBusqueda.minimo
    }
    return barco;
}

function filtrarMaximo(barco){
    if(datosBusqueda.maximo){
        return barco.precio <= datosBusqueda.maximo
    }
    return barco;
}


function filtrarPuertas(barco){
    if(datosBusqueda.puertas){
        return barco.puertas === datosBusqueda.puertas
    }
    return barco;
}

function filtrarTransmision(barco){
    if(datosBusqueda.transmision){
        return barco.transmision === datosBusqueda.transmision
    }
    return barco;
}

function filtrarColor(barco){
    if(datosBusqueda.color){
        return barco.color === datosBusqueda.color
    }
    return barco;
}

//mostrarbarcos(barcos)
filtrarbarco()
