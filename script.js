
let numero  = Math.floor(Math.random() * 1000)

let numeroUser = parseInt(prompt('Ingrese Numero a adivinar: '))


console.log(numeroUser)


while (numeroUser !== numero) {

    if (numeroUser < numero) {
        console.log(`EL numero ${numeroUser} es mas bajo`)
        
    } else if (numeroUser > numero) {
        console.log(`EL numero ${numeroUser} es mas alto`)
    } 

    numeroUser = parseInt(prompt('Ingrese Numero a adivinar porfavor: '))
    
} 

console.log(`Adivinaste!!! El numero es : ${numero}`);






