const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.conteneur-transports');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){
    colTransport.classList.toggle('conteneur-transports-invisible');

};