/*menu*/ /*Aqui definimos las constantes que van a hacer afectadas, por eso elegi los Id para poder llamarlos con Java*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>  {
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu mobile*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>  n.addEventListener('click', linkAction))

/*Swiper nuevos slider */
 /*Esto es para nuestro slider (NUEVO) de la parte de abajo, q nos permite deslizar a la izquierda o derecha*/ 
let newSwiper = new Swiper (".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})

/*Background header*/

/*Esto es para el header, para cuando estemos viendo la pagina deslizando 
hacia abajo, cambie de color el header a un tono mas oscuro*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*scroll section*/
/*En la parte del header hay un punto blanco, conforme vayamos avanzando a las diferentes secciones vaya cambiando
con nosotros, un ejemplo es que si estamos en la seccion de producto, el punto de blanco este debajo de producto
en la parte del header*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset 
    sections.forEach(current =>  {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)

/*scroll up*/
/*Aqui es la flecha que esta en el footer que nos llevara a la parte superior de la pagina, para evitar deslizar y 
hacer mas fácil la interacción de la página*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*Animacion*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal(`.home-swiper, .new-swiper, .newslc`)
sr.reveal(`.categorydata, .footercontent`, {interval: 100})
sr.reveal(`.aboutdata, .discountimg`, {origin: 'left'})
sr.reveal(`.aboutimg, .discountdata`, {origin: 'left'})