const readlineSync = require('readline-sync');
const{ generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');
const obtenerNumeroUsuario = () =>{
    return readlineSync.question('Ingresa un número: ')
};

const juegoAdivinanza = () =>{
    const numeroGenerado = generarNumeroAleatorio();
    let numeroAdivinado =0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');
    console.log('numeroSecreto: '+ numeroGenerado);
    while(numeroAdivinado!= numeroGenerado){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroGenerado, numeroAdivinado);
    }
};

juegoAdivinanza();