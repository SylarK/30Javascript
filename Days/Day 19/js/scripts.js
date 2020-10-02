var setInt;

document.querySelector('#image').addEventListener('mouseout', () => {

    stopAnimate();

})

document.querySelector('#image').addEventListener('click', () => {

    animateScript();

})

function stopAnimate(){

    clearInterval(setInt);

}

function animateScript() {

    var position = 256;
    const interval = 100;

    setInt = setInterval( () => {

        document.querySelector('#image').style.backgroundPosition = `-${position}px 0px`;

        if(position < 1536){
            position = position + 256;
        } else {
            position = 256;
        }

    }, interval);

} // end animateScript

