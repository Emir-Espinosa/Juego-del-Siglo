
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento) ;
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //habilitar el boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'el número secreto es menor');
        }else{
            asignarTextoElemento ('p', 'el número secreto es mayor');
        }
        intentos ++;
        limpiarcaja();
    }    
    return;
}    
//funcion limpiar caja 
function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
    
}
//generar numero secreto
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+ 1; 
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se utilizaron todos los números posibles')
    }else {
         //si el numero generado esta incluido en la lista  
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();        
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado 
        }
    }   
}
//funciion de mensajes iniciales
function condicionesIniciales(){
    //asignacion  de texto 
    asignarTextoElemento('h1', 'El Juego del Siglo');
    asignarTextoElemento('h2', 'Adivina el Número Secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
//reiniciar juego con el boton 
function reiniciarJuego(){
    //limpiar la caja
    limpiarcaja()
    //indicar mensaje de intervalo de numeros    
    //generar el numeros aleatorio   
    //inicializar el nuemro intentos
    condicionesIniciales();    
    //deshabilitat el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();


