const mykey = 'AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g';
const myform = document.querySelector('form');
const content = document.querySelector('.content');

myform.addEventListener('submit', () => {
    let x = document.querySelector('input').value;
    x = x.replace(' ','_');
    x = x.replace('.','_');
    
    let api = 'https://www.googleapis.com/books/v1/volumes?q='+x+'&key='+mykey;
    console.log(api);

    fetch(api)
        .then(res => console.log(res))
        .then( setResults)


})



function setResults(res){

    console.log('Entrou');

    for( let i = 0; i < res.items.length; i++ ){
        var item = res.items[i];

        console.log(i);

        /*let newBook = document.createElement('DIV');
        let img     = document.createElement('DIV');
        let dataBook= document.createElement('DIV');
        let pTitle  = document.createElement('P');
        let pAuthor  = document.createElement('P');
        let pDescription  = document.createElement('P');

        newBook.classList.add('book');
        img.classList.add('img-book');
        dataBook.classList.add('data-book');
        pTitle.classList.add('title-book');
        pAuthor.classList.add('author-book');
        pDescription.classList.add('description-book');*/




    }

}


/*

    https://developers.google.com/books/docs/v1/getting_started#JSONP
    https://www.googleapis.com/books/v1/volumes?q=harry_potter&key=AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g
    https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_document_createelement2
    https://stackoverflow.com/questions/12622465/creating-a-div-element-inside-a-div-element-in-javascript
    https://www.w3schools.com/jsref/met_node_appendchild.asp

*/