window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.titulo', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.sobreMiDerecha', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.primerIcono', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.segundoIcono', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.tercerIcono', {
    duration: 1000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.portafolio', {
    duration: 2000,
    origin: 'left',
    distance: '300px',

});
sr.reveal('.contacto', {
    duration: 2000,
    origin: 'top',
    distance: '300px',

});

sr.reveal('.socialIcons1', {
    duration: 1000,
    origin: 'right',
    distance: '300px',

});
sr.reveal('.socialIcons2', {
    duration: 1500,
    origin: 'right',
    distance: '300px',

});
sr.reveal('.socialIcons3', {
    duration: 2000,
    origin: 'right',
    distance: '300px',

});
sr.reveal('.socialIcons4', {
    duration: 2500,
    origin: 'right',
    distance: '300px',

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// nav scroll

 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
 });
