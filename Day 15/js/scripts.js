$('document').ready( () => {

    $('form').on('submit', (e) => {

        let description = $('#descricao').val();
        let value       = $('#valor').val();
        
        let data = {desc:description, value:value}

        addHistory(data);

        e.preventDefault();

    });

})

function addHistory(data){

    let classOperator = data['value'] > 0 ? 'positive' : 'negative'; 

    let item = '';
    item += `

        <li class="list-group-item ${classOperator}">
        <div class="row-values">
            <div class="col-md-9">${data['desc']}</div><span class="divisor"></span>
            <div class="col-md-3">${data['value']}</div>
            </div>
        </li>
    
    
    `

    $('#lista').append(item);

    totalValues(data['value'], classOperator);

}

function totalValues(data, operator){

    if(operator == 'positive'){

        let atual = parseInt($('#total-entradas').text());
        atual = atual + parseInt(data);
        $('#total-entradas').text(atual);

    } else {

        let atual = parseInt($('#total-saidas').text());
        atual = atual + parseInt(data);
        $('#total-saidas').text(atual);

    }

    attPainel();

}

function attPainel(){

    let entradas    = parseInt($('#total-entradas').text());
    let saidas      = - (parseInt($('#total-saidas').text()));
    let valor = entradas - saidas;

    $('#total').html(valor);


}