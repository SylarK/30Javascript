const movement = document.querySelector('.movement');
const text = movement.querySelector('h2');
const walk = 500;

function shadow(e){
    const { offsetWidth: width, offsetHeight: height} = movement;
    let { offsetX: x , offsetY: y } = e;
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round(( x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(219,56,219,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(56,56,219,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(56,181,219,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(219,203,56,0.7)
    
    `;
}

    movement.addEventListener('mousemove', shadow);