const panels = document.querySelectorAll('.panel');

function Open(){
    console.log('Hello');
    this.classList.toggle('open');
}

function Active(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', Open));
panels.forEach(panel => panel.addEventListener('transitionend', Active));