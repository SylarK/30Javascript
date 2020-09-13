const panel = document.querySelector('.panel-img');
const img   = document.querySelector('img');

panel.addEventListener('mousemove', (e) => {

    let zoom    = document.querySelector('#zoom-img').value;

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log('Zoom: ' + zoom);
    console.log(x, y);
    

    img.style.transformOrigin   = `${x}px ${y}px`;
    img.style.transform         = `scale(${zoom})`;

});

panel.addEventListener('mouseleave', () => {

    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';

})
