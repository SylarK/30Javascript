var x = 0;
var textEffect = 'DIA 26 - COMPLETO.';
var container = document.querySelector('#effect');

function animate(){
    if(x < textEffect.length){

        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 80);

    }
}

animate()