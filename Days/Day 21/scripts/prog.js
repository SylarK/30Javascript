
document.body.onload = addElement;

function addElement(){

    let newDiv = document.createElement("div");
        newDiv.className += 'container';
    let progDiv = document.createElement("div");
        progDiv.id = 'progContainer'
    /*let progress = document.createTextNode("Hello, World!")*/
    let progress = document.createElement("div");
        progress.id = 'progress'

    let btn = document.createElement('button');
        btn.id = 'btn-click'
        btn.innerHTML = 'Click me'

        progDiv.appendChild(progress)       
        newDiv.appendChild(progDiv)
        




    let currentDiv = document.getElementById("div1");

    document.body.insertBefore(newDiv, currentDiv);
    document.body.appendChild(btn);

    el = document.querySelector('#btn-click');
    /*el.addEventListener("click", sayHello})*/
    el.addEventListener("click", progressBar)

}

function sayHello(){

    alert('Hello World!')

}

function progressBar(){

    let x = document.querySelector('#progress');
    let larg = 1;
    let interval = setInterval(frame, 60)

    function frame(){

        if(larg >= 100){

            clearInterval(interval)

        } else {

            larg++;
            x.style.width = larg + '%';
            x.innerHTML = larg + '%';

        }

    }

}