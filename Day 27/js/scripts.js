const navSlide = () => {

    const burguer   = document.querySelector('.burguer');
    const nav       = document.querySelector('.nav-links');
    const navLinks  = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

    

        navLinks.forEach((link, index) => {

        /*link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;*/
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
        });

        burguer.classList.toggle('toggle');

});

    $('.apply').click(() => {

        alert('27 / 30 JS Completed.')

    })

}

navSlide()