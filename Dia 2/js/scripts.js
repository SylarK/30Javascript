/*Variavel de Imagens que será puxada de maneira dinâmica*/
var images = [];
var nivel1 = 8;
const myPanel = document.querySelector('#container');

for (var i = 0; i < nivel1; i++){
    /*returns um inteiro entre 0 - 15*/
    var rand    = Math.floor(Math.random() * 16)
    var img     = 'https://api.adorable.io/avatars/150/abott'+rand+'@adorable.png';
    images.push(img);
    images.push(img);
}

imagensRandomicas();

/*Criando uma função para que o array troque o index das imagens*/
function imagensRandomicas(){

    
    Array.prototype.randomize = function(){
        var i = this.length, j , temp;
        while ( --i )
        {
            j = Math.floor( Math.random() * (i - 1));
            temp = this[i];
            this[i] = this[j]
            this[j] = temp;
        }
    };
    
    images.randomize();

}
/* end */

/*Visualizando imagens*/
var listaOrd  = '<ol>';
for (var i = 0; i < (nivel1 * 2); i++){
    listaOrd += '<li>';
    listaOrd += '<img src = "' + images[i] + '" />';
    listaOrd += '</li>';
}
listaOrd += '</ol>';
myPanel.innerHTML = listaOrd;
/*end*/

/*Cartas viradas*/
var img = document.querySelectorAll('img');
img.forEach(key => key.style.display = 'none');
/*end*/


var click1 = '';
var click2 = '';
var score = 0;



    