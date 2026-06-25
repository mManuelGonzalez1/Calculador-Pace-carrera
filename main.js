const ValoresDistancia= document.getElementById("distancia");
const Horas= document.getElementById("horas");
const minutos= document.getElementById("minutos");
const segundos= document.getElementById("segundos");
const botonEnviar= document.getElementById("botonEnviar");
const inputVacio= document.querySelectorAll('[required]');
const contenedorErrorFaltaDatos = document.getElementById("errorFaltaDatos");
const contenedorErrorMinutos = document.getElementById("errorValorIncorrecto");
const contenedorResultado = document.getElementById("resultado")
const botonRiniciar=document.getElementById("botonReiniciar");
//Variables
let formularioVacio= true;


function limpiarErrores() {
    contenedorErrorFaltaDatos.style.display = "none";
    contenedorErrorMinutos.style.display = "none";
    inputVacio.forEach(input => {
        input.style.border = "1px solid rgba(255,255,255,0.06)";
    });
}

function limpiarFormulario() {
    inputVacio.forEach(input => {
        input.value = "";
    });
    contenedorResultado.innerHTML = "";
    botonEnviar.disabled = false;
    botonEnviar.classList.remove("boton--disabled");
}

botonEnviar.addEventListener("click",function(){
//PROCESO VALIDADOR 
    //Proceso par marcar casillas en rojo
for (let i of inputVacio) {
    if (i.value === "") {
        i.style.border = "2px solid red";
        formularioVacio=true
        
    }else{
        i.style.border = "1px solid black";
        formularioVacio = false
    }
}
//Proceso para validar si los minutos se digitan correctamente
if(inputVacio[2].value> 60){
            
            contenedorErrorMinutos.style.display="block";
            setTimeout(()=>{
            contenedorErrorMinutos.style.display="none"
            },3000)
            inputVacio[2].style.border = "2px solid red";
            formularioVacio=true
            return
        }
     

//Proceso paar validar si se envia el formulario o no
if (formularioVacio === true) {
    contenedorErrorFaltaDatos.style.display="block"
    setTimeout(()=>{
        contenedorErrorFaltaDatos.style.display="none"
    },3000)
    // alert("Por favor, llena los campos obligatorios marcados en rojo.");
    return
     // Detiene la función en seco y evita que el formulario se envíe a medias
}else{
    console.log("Proceso completado")
}

//CALCULOS 

//parsear
    let horasInt= parseInt(Horas.value);
    let horasAminutos=horasInt * 60
    let minutosInt= parseInt(minutos.value);
    let segundosInt= parseInt(segundos.value); 
    let distanciaInt= parseInt(ValoresDistancia.value);
    let paceMatematico= (horasAminutos+minutosInt)/distanciaInt
    
    //funciones 
function SepararNumero(){
        let parteEntera = Math.trunc(paceMatematico);
        // Parte decimal (siempre positiva)
        let parteDecimal = parseFloat(Math.abs(paceMatematico - parteEntera).toFixed(1));
        let DecimalAsegundos = parteDecimal * 60
        let miObjeto ={ parteEntera, parteDecimal }
        miObjeto.parteDecimal= DecimalAsegundos;
        return (`El pace al que se debera correr es a ${parteEntera}:${miObjeto.parteDecimal} min/km`);
    }

function resultado(){
    const nuevoHTML=`<div class="form__result" style="display: block;">
    <h1 class="form__title">Resultados pace calculado </h1>
    <p class="form__message">${SepararNumero()}
    </div>`    
    contenedorResultado.insertAdjacentHTML("afterbegin", nuevoHTML);
    botonEnviar.disabled = true;
    botonEnviar.classList.add("boton--disabled");
    botonRiniciar.style.display="block";
}
    resultado();   
    
});

botonRiniciar.addEventListener("click", function() {
    limpiarErrores();
    limpiarFormulario();
});
