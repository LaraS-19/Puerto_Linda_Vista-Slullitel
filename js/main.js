let links = document.querySelectorAll('navBar a')

for(let link of links){
    link.addEventListener('click', cargarPagina)
}

function cargarPagina(evt){
    evt.preventDefault()

    const url = evt.target.dataset.pagina + ".html"

    const lindaVista = document.querySelector('main')

    fetch(url)
        .then( (pagina)=> {
            return pagina.text()
        })
        .then( (page)=>{
            lindaVista.innerHTML = page
        })
        .catch ( err => console.log(err))
}

const order = [];

document.addEventListener('DOMContentLoaded', ()=> {})

Swal.fire('Escríbenos para consultar disponibilidad en el puerto')

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

function noResultados(){}

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

filtrarBarco()

localStorage.setItem('Barco1', 'Viento Blanco')
localStorage.setItem('Barcaza1', 'Coop 19')
localStorage.setItem('Barcaza2', 'Coop 23')
localStorage.setItem('Barcaza3', 'Mapuche')
localStorage.setItem('Barcaza4', 'Azabache')
localStorage.setItem('Barco2', 'EP Chaplin')
localStorage.setItem('Barco3', 'Campesino')
localStorage.setItem('Barco4', 'Zapukay')
localStorage.setItem('Barco5', 'Nonej')
localStorage.setItem('Barcaza5', 'Derpeth')