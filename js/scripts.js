//Capturando keys dentro de um array
const allKeys = Array.from(document.querySelectorAll('.key'));

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