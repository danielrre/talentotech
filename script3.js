const numero  = Math.floor(Math.random() * 100);
let numeroUser = undefined;
// let numeroIntentos = 4;

function juegoMayorMenor() {
    numeroUser = parseInt(prompt('Digita un numero: '));
    
    console.log('mi numero ' + numeroUser)
    if (numero == numeroUser){
        console.log('Ganaste');
    } else if (numeroUser >= numero) {
        console.log('Menor');
        juegoMayorMenor();
    } else{
        console.log('Mayor')
        juegoMayorMenor();
    }
}

juegoMayorMenor()