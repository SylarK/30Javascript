const mykey = 'AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g';
const myform = document.querySelector('form');
const content = document.querySelector('.content');

myform.addEventListener('submit', () => {
    let x = document.querySelector('input').value;
    x = x.replaceAll(' ','_');
    x = x.replaceAll('.','_');
    x = x.replaceAll('__','_');
    
    let api = 'https://www.googleapis.com/books/v1/volumes?q='+x+'&key='+mykey;

    fetch(api)
    .then(res => res.json())
    .then(results)


})



function results(res){

    for( let i = 0; i < res.items.length; i++ ){
        var item = res.items[i];

        let newDiv = document.createElement('div');
        newDiv.className = 'book';
        newDiv.innerHTML = 'Hello '
        content.appendChild(newDiv);

    }

}


/*

    https://developers.google.com/books/docs/v1/getting_started#JSONP
    https://www.googleapis.com/books/v1/volumes?q=harry_potter&key=AIzaSyDOjJemmjLCAHVUYVpT5UyWHpVw9Xo2X-g
    https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_document_createelement2
    https://stackoverflow.com/questions/12622465/creating-a-div-element-inside-a-div-element-in-javascript
    https://www.w3schools.com/jsref/met_node_appendchild.asp

*/