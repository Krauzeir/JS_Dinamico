// Som Pom
function tocaSom (selectorAudio) {
    
    const elemento = document.querySelector(selectorAudio);

    if (elemento && elemento.localName ==='audio'){
        elemento.play();
    }
    else {
        console.log('Elemento invalido ou selector errado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');





for (let cont=0; cont<listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1];

    //template String (com crase)
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        console.log(event.code)
        
        if (event.code === 'Space'||'Enter' ) {
            tecla.classList.add('ativa');
        }
        else {

        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}