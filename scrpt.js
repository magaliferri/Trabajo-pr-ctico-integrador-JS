
const valorTicket = 200;

let descEstudiante = 0.20;
let descTrainee = 0.50;
let descJunior = 0.85;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const botonResumen = document.getElementsByClassName("resumen");
const botorBorrar = document.getElementsByClassName("borrar");
const total = document.getElementsByClassName("total");

function totalPagar(){

    let totalValor = (cantidad.value) * valorTicket;
    if (categoria.value == 1){
        totalValor = totalValor - (totalValor * descEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descJunior);
    }

    total.innerHTML = 'Total a pagar: $ ${totalValor}';
}

botonResumen.addEventListener("click", totalPagar);

botorBorrar.addEventListener("click",()=>{
    total.innerHTML = 'Total a pagar: $'
})

document.getElementsByClassName