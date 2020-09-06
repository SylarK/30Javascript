$('document').ready(() => {

    $('form').on('submit', (e) => {

        let title     = $('#title').val();
        let type      = $('#Type').val();
        let uppercase = $('#uppercase').is(':checked');
        let lowercase = $('#lowercase').is(':checked');


        
        let newPassword = new Password(title, type, uppercase, lowercase, );
        newPassword.generate();
        console.log(newPassword.type);
        console.log(newPassword.title);
        console.log(newPassword.password);
        newPassword.print();

        e.preventDefault();

    });

    $('#salvar').on('click', () => {

        let title     = $('#title').val();
        let type      = $('#Type').val();
        let password  = document.querySelector('#show-password').innerText;

        let output = `
        
        <tr>
            <th scope="row">${document.querySelectorAll('tr').length}</th>
            <td>${title}</td>
            <td>${type}</td>
            <td>${password}</td>
        </tr>
        
        `;

        $('tbody').append(output);

    })

    $('.close-eye').on('click', () => {

        $('table').css('filter', 'blur(5px)');
        $('.open-eye').css('display', 'block');
        $('.close-eye').css('display', 'none');

    })

    $('.open-eye').on('click', () => {

        $('table').css('filter', 'blur(0px)');
        $('.open-eye').css('display', 'none');
        $('.close-eye').css('display', 'block');

    })

})

class Password{

    constructor(title, type, uppercase, lowercase){

        this.title      = title;
        this.type       = type;
        this.uppercase  = uppercase;
        this.lowercase  = lowercase;

        this.password   = '';

    }

    print(){

        $('#show-password').html(this.password);

    }

    generate(){

        if (this.type == 'Alpha'){

            this.password = this.randomAlpha(15);         

        } else if ( this.type == 'Number') {

            this.password = this.randomNumeric(15);

        } else if (this.type == 'Letters') {

            this.password = this.randomLetters(15);

        }

    }

    randomNumeric(length) {
        let result = '';
        for ( var i = 0; i < length; i++ ) {
           result += Math.floor(Math.random() * 9 + 1);
        }

        return result;
    }

    randomAlpha(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

     randomLetters(lenth){

        var result           = '';

        if(this.uppercase === true && this.lowercase === true){

            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        } else if (this.uppercase === true && this.lowercase === false){

            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        } else if (this.uppercase === false && this.lowercase === true){

            var characters       = 'abcdefghijklmnopqrstuvwxyz';

        }
        
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

     }

}