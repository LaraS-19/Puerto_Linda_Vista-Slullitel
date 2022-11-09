const datosBusqueda = {
    nombre: '',
    muelle: '',
    minimo: '',
    maximo: 60000,
    año: '',
    estadía: '',
}


function mostrarBarcos(barcos){
    barcos.forEach(barco => {
        console.log(`${barco.nombre} ${barco.tamaño} - ${barco.muelle} - ${barco.año} año - estadía: ${barco.estadía}`) 
        document.write(`<p>${barco.nombre} ${barco.tamaño} - ${barco.muelle} - ${barco.año} año - estadía: ${barco.estadía}</p>`)        

    });
}


function filtrarBarco(){
    const resultado = barcos.filter(filtrarNombre).filter(filtrarMuelle).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarAño).filter(filtrarEstadía)
    if(resultado.length){
        mostrarBarcos(resultado)
    }else {
        noResultados()
    }
}

function noResultados(){
    console.log("No hay resultados")
    document.write("No hay resultados")
}


function filtrarNombre(barco){
    if(datosBusqueda.nombre){
        return barco.nombre === datosBusqueda.nombre
    }
    return barco;
}

function filtrarMuelle(barco){
    if(datosBusqueda.muelle){
        return barco.muelle === datosBusqueda.muelle
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

function filtrarAño(barco){
    if(datosBusqueda.año){
        return barco.año === datosBusqueda.año
    }
    return barco;
}

function filtrarEstadía(barco){
    if(datosBusqueda.estadía){
        return barco.estadía === datosBusqueda.estadía
    }
    return barco;
}

//mostrarbarcos(barcos)
filtrarBarco()
