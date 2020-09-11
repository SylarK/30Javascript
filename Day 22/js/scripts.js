const myModal    = $('#myModal');

$('form').on('submit', (e) => {

    let value  = document.querySelector('#valor').value;
    let qtd    = document.querySelector('#pessoas').value;
    let final  = parseFloat(value/qtd).toFixed(2);

    let output = `
        Para pagarmos o valor de <strong>R$ ${value}</strong>, ficará R$ <strong>${final}</strong> para cada uma das ${qtd} pessoas que estão na vaquinha.

    `

    $('#answer').html(output);

    $('#myModal').show();



    e.preventDefault();

}); 

$('.close').on('click', () => {

    $('#myModal').css('display', 'none');
    //$('#myModal').hide();

})
