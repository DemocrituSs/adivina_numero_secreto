const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};
    
const verificarAdivinanza = (numeroGenerado, numeroAdivinado) =>{
    if(numeroAdivinado == numeroGenerado){
        console.log('¡Felicitaciones!¡Has adivinado el número secreto!');
    }else if(numeroAdivinado > numeroGenerado){
        console.log('El número secreto es menor. ¡Sigue intentando!');
    }else{
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};



    