const btnSubmit = document.querySelector('#btnSubmit')
const note      = document.querySelector('#notes');
const register  = document.querySelector('#register ul')

var to_Do = JSON.parse(localStorage.getItem('lista')) || [];

function show(){

    register.innerHTML = '';

    for(todo of to_Do){
        
        var to_DoElement    = document.createElement('li');
        var pharp           = document.createElement('span');
        var to_DoText       = document.createTextNode(todo);
        pharp.appendChild(to_DoText);
        var pos = to_Do.indexOf(todo);

        var linkElement     = document.createElement('a');
        var linkText        = document.createElement('img');
        linkText.src = 'img/lixeira.png';
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTo_Do('+ pos + ')');
        
        linkElement.appendChild(linkText);

        to_DoElement.appendChild(pharp);
        to_DoElement.appendChild(linkElement);
        register.appendChild(to_DoElement);
        

    }

}

function addTo_Do(){

    var text = note.value;
    note.value = '';
    to_Do.push(text);
    show();
    salvar();

}

function salvar(){

    localStorage.setItem('lista', JSON.stringify(to_Do));

}

function deleteTo_Do(pos){

    to_Do.splice(pos, 1);
    show();
    salvar();

}

show();
pegarData();

btnSubmit.addEventListener('click', addTo_Do);

/*Colocando a data no note*/

function pegarData(){

    today = new Date();

    /*Data do dia atual*/
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    /*Nome do dia*/
    var op = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    var diaSemana = op[today.getDay()];
    
    document.querySelector('#getDay').innerHTML = diaSemana;
    document.querySelector('#getDate').innerHTML = date;


}

