$('document').ready(() => {
    
    $('form').on('submit', (e) => {

        let author  = $('#author_course').val();
        let name    = $('#name_course').val();
        let value   = $('#value_course').val();
        let img     = $('#img_course').val();
        
        let newCard = new Card(author, name, value, img);

        newCard.allData();
        newCard.createCard();
        newCard.eraseInput();
        

        e.preventDefault();

    })
})

class Card{

    constructor(author, name, value, img){
        this.author = author;
        this.name   = name;
        this.value  = value;
        this.img    = img;
        this._id    = this.increment_id();
    }

    get data(){

        return this.allData();

    }

    eraseInput(){

        $('#author_course').val('');
        $('#name_course').val('');
        $('#value_course').val('');
        $('#img_course').val('');

    }

    allData(){

        console.log('Autor: ' + this.author);
        console.log('Name Course: ' + this.name);
        console.log('Value: ' + this.value);
        console.log('URL img: ' + this.img);
        console.log('Id: ' + this._id );

    }

    createCard(){

        let output = '';
        output = `

            <div class="card card-cursos">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${this.img}">
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${this.name}<i class="material-icons right" style="color: black;"> + </i></span>
                <p><span class='moeda'>R$</span>${this.value}</p>
                
                </div>
                <div class="clear"></div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${this.name}<i class="material-icons right"> - </i></span>
                <p class='author_course'>Autor do curso: ${this.author}</p>
                <p class='description_course'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam minus voluptas laudantium quos odio sapiente illo nemo minima esse sint placeat ipsa alias veniam quaerat non quasi, quam optio.</p>
                </div>
                
            </div><!-- end card cursos -->
        
        
        `
        $('.panel').append(output);
        
        ;

    }

    increment_id(){

        if($('.card-cursos').length > 0 ){

            this.latestId = $('.card-cursos').length + 1
            return this.latestId;

        } else {

            this.latestId = 1;
            return this.latestId;

        }

    }
    

}

/*

    https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1 - Vue JS img
    https://static.vecteezy.com/system/resources/previews/000/523/378/non_2x/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg - Programming img
    https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png    - JS img

*/