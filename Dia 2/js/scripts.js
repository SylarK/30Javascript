/*Variavel de Imagens que será puxada de maneira dinâmica*/
var images = [];
var nivel1 = 8;
var check = [];
const myPanel = document.querySelector('#container');

for (var i = 0; i < nivel1; i++){
    /*returns um inteiro entre 0 - 15*/
    var rand = Math.floor(Math.random() * 16)
    if(check.lastIndexOf(rand) == -1){
        check.push(rand);
        console.log(rand);
        var img     = 'https://api.adorable.io/avatars/150/abott'+rand+'@adorable.png';
        images.push(img);
        images.push(img);
    } else {
        i--
    }
    
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

/*var img = document.querySelectorAll('img');
img.forEach(key => key.classList.add('face-dow'));*/

$("img").hide();

/*end*/


var click1 = '';
var click2 = '';
var count = 0;

/*Desvirar cartas*/

$("li").click(function() {
    if((count < 2) && ($(this).children('img').hasClass('face-up') === false))
    {
        count++;
        $(this).children("img").show();
        $(this).children("img").addClass('face-up');
    

        // click 1 
        if(count == 1){
            click1 = $(this).children("img").attr("src");
        } 
        // click 2
        else 
        {
            click2 = $(this).children("img").attr("src");
        

        //check
            if (click1 == click2){
                console.log('Acertou.');
                $("li").children("img[src='" + click2 + "']").addClass("match");
            }else{
                //Caso não esteja certo. Viramos as cartas novamente e removemos a classe 'face-up'
                console.log('Errado!');
                setTimeout(function(){
                    $('img').not(".match").hide();
                    $('img').not(".match").removeClass("face-up");
                }, 1000);
            }
        

            //reset no count
            count = 0;
            setTimeout(function(){ console.clear();}, 60000);
        }
    }

});

    