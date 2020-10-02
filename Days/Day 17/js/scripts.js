const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const nivel1  = document.querySelector('#nivel1');
const nivel2  = document.querySelector('#nivel2');
const nivel3  = document.querySelector('#nivel3');
const form    = document.querySelector('form');

let nivel = 10;

numerosAleatorios();

nivel1.addEventListener('click', () => {

    nivel = 10;
    numerosAleatorios();

});
nivel2.addEventListener('click', () => {

    nivel = 50;
    numerosAleatorios();

});
nivel3.addEventListener('click', () => {

    nivel = 100;
    numerosAleatorios();

});

form.addEventListener('submit', () => {
    
    let answer  = document.querySelector('#answer').value;

    conferir(answer);

})

function numerosAleatorios(){

    number1.innerText = getRandomInt(nivel);
    number2.innerText = getRandomInt(nivel);

}
2
function conferir(value){

    soma = parseInt(number1.innerText) + parseInt(number2.innerText);

    if(value == (parseInt(number1.innerText) + parseInt(number2.innerText))){
        console.log('Número 1 : ' + number1.innerText);
        console.log('Número 2 : ' + number2.innerText);
        console.log('Total    : ' + soma); 
        console.log('Sua resposta : ' + value);
        alert('Certa resposta');
        numerosAleatorios();
    } else {
        console.log('Número 1 : ' + number1.innerText);
        console.log('Número 2 : ' + number2.innerText);
        console.log('Total    : ' + (parseInt(number1.innerText) + parseInt(number2.innerText)));
        console.log('Sua resposta : ' + value);
        alert('Você errou. Tente novamente.');
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

