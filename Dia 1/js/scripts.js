//Capturando keys dentro de um array
const allKeys = Array.from(document.querySelectorAll('.key'));


//Capturando btnChange
const bodyHtml = document.body;
const btnChange = document.querySelector('.change');
btnChange.addEventListener('click', () => {
    if(bodyHtml.style.backgroundImage == 'url("img/background-drum.jpg")'){

        bodyHtml.style.backgroundImage = 'url("img/background-microphone.jpg")';
    } else {

        bodyHtml.style.backgroundImage = 'url("img/background-drum.jpg")';
    }
    
})

//Event

allKeys.forEach(key => key.addEventListener('transitionend', removeTrans));

    //Escutando a window para capturar todas as teclas pressionadas. Se for pressionada a tecla
    //que queremos, então será acionada a função play (passando como parametro o keycode da tecla pressionada).
window.addEventListener('keydown', play);
/*allKeys.forEach(key => key.addEventListener('click', () => {
    console.log('Keycode:' + key.getAttribute('data-key'));
}))*/

//Functions
function removeTrans(element){
    if(element.propertyName !== 'transform') return;
    element.target.classList.remove('playing');
}

function play(element){
    const audio = document.querySelector('audio[data-key="'+element.keyCode+'"]');
    const key = document.querySelector('div[data-key="'+element.keyCode+'"]');
    console.log('Capture: ' + element);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}