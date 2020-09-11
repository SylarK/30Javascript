/*AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g*/
/*GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey*/

$('form').on('submit', (e) => {

    let title = document.querySelector('#book_name').value;
    getBook(title);
    
    e.preventDefault();

})



function getBook(title){

    const apikey = 'AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g';
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apikey}`)
    .then((res) => {

        console.log(res);
        let books = res.data.items;
        let output = '';
        $.each(books, (index, book) => {
            output += `

            <div class="gallery">
                <a target="_blank">
                <img src="${book.volumeInfo.imageLinks.thumbnail}">
                </a>
                <div style='cursor:pointer' class="desc"  data-info=${index}>${book.volumeInfo.title}</div>
                
            </div>
            <div id="myModal${index}" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                <span class="close">&times;</span>
                <p><strong>Autor: </strong>${book.volumeInfo.authors}</p>
                <p><strong>Categoria: </strong>${book.volumeInfo.categories}</p>
                <p><strong>Título: </strong>${book.volumeInfo.title}</p>
                <p>${book.volumeInfo.description}</p>
                </div>
            
            </div>
            
            `
        })

        $('.col2').html(output);
        
        console.log(books)
        listenEvent();


    })
    .catch((err) => {

        console.log(err);

    })

}

function listenEvent(){

    let buttons = document.querySelectorAll('.desc');
    console.log(buttons)

    buttons.forEach(key => key.addEventListener('click', () => {

        /*console.log(key.getAttribute('data-info'))*/
        $('#myModal'+key.getAttribute('data-info')).show();

        $('.close').on('click', () => {

            $('#myModal'+key.getAttribute('data-info')).hide()
        
        })
        

    }))

}
