const readline = require('readline');

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

function asignarTextoElemento(texto) {
    console.log(texto);
}

function verificarIntento(numeroDeUsuario) {
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        console.log('¡Juego terminado!');
        rl.close(); 
    } else {
if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('El número secreto es menor');
        } else {
            asignarTextoElemento('El número secreto es mayor');
        }
        intentos++;
        solicitarNumero(); 
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('Juego del número secreto!');
    asignarTextoElemento(`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    solicitarNumero(); 
}

function solicitarNumero() {
    rl.question('Introduce un número: ', (respuesta) => {
        const numeroDeUsuario = parseInt(respuesta);
        verificarIntento(numeroDeUsuario);
    });
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

condicionesIniciales();