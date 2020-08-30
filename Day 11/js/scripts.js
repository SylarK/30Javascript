const btn = document.querySelectorAll('.op');
const img = document.querySelector('.myimg img')
btn.forEach(key => key.addEventListener('click', () => {
    
    let x = key.getAttribute(['data-key'])
    
    console.log(x);
    
    if( x == 'normal'){
        img.className = ''
    }else {
        img.className = '';
        img.classList.add(x);
    }
    

}));