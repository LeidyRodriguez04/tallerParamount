let bodyPagina = document.querySelector("body")
let sectbody = document.createElement("section")
sectbody.classList.add("section_principal")
bodyPagina.appendChild(sectbody)
let navbar = document.createElement("nav")
navbar.classList.add("navbar", "navbar-expand-lg", "py-2", "px-5")
sectbody.appendChild(navbar)

let div1Nav = document.createElement("div")
div1Nav.className = "container-fluid"
navbar.appendChild(div1Nav)

let a111Div = document.createElement("a")
a111Div.classList.add("navbar-brand")
div1Nav.appendChild(a111Div)

let img111Div = document.createElement("img")
img111Div.src = "assets/img/logo.svg"
img111Div.classList.add("logo")
a111Div.appendChild(img111Div)
let div1111Div = document.createElement("div")
div1111Div.classList.add("nav-item", "d-flex", "ps-4")
a111Div.appendChild(div1111Div)

let div111Div = document.createElement("div")
div111Div.classList.add("collapse", "navbar-collapse")
div1Nav.appendChild(div111Div)

let ul111Div = document.createElement("ul")
ul111Div.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0")
div111Div.appendChild(ul111Div)

let li1ul = document.createElement("li")
li1ul.classList.add("nav-item")
ul111Div.appendChild(li1ul)
let a1111div = document.createElement("a")
a1111div.classList.add("nav-link", "linea")
li1ul.appendChild(a1111div)

let li2ul = document.createElement("li")

li1ul.classList.add("nav-item")
ul111Div.appendChild(li2ul)
let a2111div = document.createElement("a")
a2111div.innerText = "HALO:"
a2111div.classList.add("nav-link", "text-white-50", "halo")
li2ul.appendChild(a2111div)

let li3ul = document.createElement("li")
li1ul.classList.add("nav-item")
ul111Div.appendChild(li3ul)
let a3111div = document.createElement("a")
a3111div.innerText = "VER AHORA"
a3111div.classList.add("nav-link", "px-2", "text-light")
li3ul.appendChild(a3111div)

let div311Div = document.createElement("div")
div311Div.classList.add("me-2", "text-light")
div311Div.innerText = "INICIAR SESIÓN"
div111Div.appendChild(div311Div)
//termino navbar

let section = document.createElement("section")
section.classList.add("container-fluid", "px-5", "pt-2", "mt-4")
sectbody.appendChild(section)

let divSect = document.createElement("div")
divSect.className = "row"
section.appendChild(divSect)

let div1DivSect = document.createElement("div")
div1DivSect.className = "col-6"
divSect.appendChild(div1DivSect)

let h1div = document.createElement("h1")
h1div.innerHTML = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
h1div.classList.add("h1", "my-2", "text-light")
div1DivSect.append(h1div)
let strongDiv = document.createElement("strong")
strongDiv.innerText = "Suscríbete por $13,900.00 COP al Mes."
strongDiv.classList.add("text-light", "fw-normal")
div1DivSect.append(strongDiv)
let brStrong = document.createElement("br")
strongDiv.append(brStrong)
let strong2Div = document.createElement("strong")
strong2Div.innerText = "Cancela en cualquier momento."
strong2Div.classList.add("text-light", "fw-normal")
div1DivSect.append(strong2Div)
let br2Strong = document.createElement("br")
let strong3Div = document.createElement("strong")
let br3Strong = document.createElement("br")
div1DivSect.append(br3Strong)
strong3Div.innerText = "Únete ahora y obtén 7 días gratis."
strong3Div.classList.add("text-light", "fw-normal")
div1DivSect.append(strong3Div)
let div3Divsect = document.createElement("div")
div3Divsect.classList.add("row", "mt-2", "mb-5", "pt-2", "mx-1")
div1DivSect.append(div3Divsect)

//crear 3 botones
let a1divSect = document.createElement("a")
a1divSect.classList.add("btn", "btn-primary", "btn_suscribir", "col-7", "my-2")
a1divSect.type = "button"
a1divSect.innerText = "SUSCRÍBETE A PARAMOUNT+"
div3Divsect.appendChild(a1divSect)
let a2divSect = document.createElement("a")
a2divSect.classList.add("btn", "col-7", "my-2", "btn-outline-light")
a2divSect.type = "button"
a2divSect.innerText = "YA TENGO PARAMOUNT+"
div3Divsect.appendChild(a2divSect)
let a3divSect = document.createElement("a")
a3divSect.classList.add("btn", "col-7", "my-2", "btn-outline-light")
a3divSect.type = "button"
a3divSect.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
div3Divsect.appendChild(a3divSect)

//seccion2
let section2 = document.createElement("section")
section2.classList.add("container-fluid", "section2", "p-5")
bodyPagina.appendChild(section2)

let divSection = document.createElement("div")
divSection.className = "row"
section2.appendChild(divSection)
let div2Section = document.createElement("div")
div2Section.className = "col-5"
divSection.appendChild(div2Section)

let h3Divsection = document.createElement("h3")
h3Divsection.innerText = "SOMOS ORIGINALES Y EXCLUSIVOS"
h3Divsection.classList.add("text-light", "h3", "fs-1")
div2Section.appendChild(h3Divsection)
let psection = document.createElement("p")
psection.innerText = "Disfruta de historias únicas, estrellas icónicas y programas exclusivos que no encontrarás en ningún otro lugar.                            "
psection.classList.add("text-light")
div2Section.appendChild(psection)

let div2Section2 = document.createElement("div")
div2Section2.classList.add("slider1","carousel-inner","mt-5","pt-5")
section2.appendChild(div2Section2)

let slick_array = [
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/halo_s1_poster_1400x2100_nb_022822_2.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/first_lady_s1_poster_1400x2100_nb_032322_2.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/enviados_s1_latam_poster_1400x2100_nb_011822.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowstone_s4_poster_1400x2100_nb_102621_1.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/rupauls_dragrace_s14_poster_1400x2100_nb_012722_0.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowjackets_s1_poster_1400x2100_nb_111021_1.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/killing_eve_s4_poster_1400x2100_021822.jpg",
"https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/sproc_salone_poster_1400x2100_nb_121021_0.jpg"
]

slick_array.forEach(element => {
    let div12Section2 = document.createElement("div")
div12Section2.classList.add("p-1")
div2Section2.appendChild(div12Section2)
let imgDiv12Section2 = document.createElement("img")
imgDiv12Section2.src = `${element}`
imgDiv12Section2.classList.add("w-100","me-2")
div12Section2.appendChild(imgDiv12Section2)
});

$(document).ready(function () {
    $('.slider1').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
    });
});

//seccion3
let seccion3 = document.createElement("section")
seccion3.classList.add("section3","container-fluid","px-5","pt-5")
bodyPagina.appendChild(seccion3)

let div3Section = document.createElement("div")
div3Section.className = "row"
seccion3.appendChild(div3Section)
let div32Section = document.createElement("div")
div32Section.className = "col-5"
div3Section.appendChild(div32Section)

let h3Div3section = document.createElement("h3")
h3Div3section.innerText = "TENEMOS TU CONTENIDO FAVORITO"
h3Div3section.classList.add("text-light", "h3", "fs-1")
div32Section.appendChild(h3Div3section)
let p3section = document.createElement("p")
p3section.innerText = "Desde películas taquilleras y series reconocidas a tus programas favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez."
p3section.classList.add("text-light")
div32Section.appendChild(p3section)

let div2Seccion3 = document.createElement("div")
div2Seccion3.classList.add("slider1","carousel-inner","mt-4")
seccion3.appendChild(div2Seccion3)

let slick2_array = [
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/1883_s1_poster_1400x2100_nb_030722.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/paw_patrol_s8a_poster_1400x2100_nb_100521_0.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/resistire_s2_poster_1400x2100_032222.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/patrick_star_s1_poster_1400x2100_120721.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/madame_x_sa_poster_1400x2100_nb_093021_0.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/arriba_chef_s1a_poster_1400x2100_nb_070221.jpg",
    "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/cecilia_s1_poster_1400x2100_nb_121721.jpg",
    ]
    
    slick2_array.forEach(element => {
    let div42Seccion3 = document.createElement("div")
    div42Seccion3.classList.add("p-1")
    div2Seccion3.appendChild(div42Seccion3)
    let imgDiv12Seccion3 = document.createElement("img")
    imgDiv12Seccion3.src = `${element}`
    imgDiv12Seccion3.classList.add("w-100","me-2")
    div42Seccion3.appendChild(imgDiv12Seccion3)
    });

//seccion4
let section4 = document.createElement("section")  
section4.classList.add("container-fluid","section4","text-center","pb-5")
bodyPagina.appendChild(section4)

let h34section = document.createElement("h3")
h34section.classList.add("h1","text-light","pt-5")
h34section.innerText ="CUANDO QUIERAS, DONDE QUIERAS"
section4.appendChild(h34section)
    
let strong4section = document.createElement("strong")
strong4section.classList.add("text-light","fw-normal")
strong4section.innerText ="Suscríbete por $13,900.00 COP al Mes."
section4.appendChild(strong4section)
let br4section = document.createElement("br")
section4.appendChild(br4section)
let strong24section = document.createElement("strong")
strong24section.classList.add("text-light","fw-normal")
strong24section.innerText = "Cancela en cualquier momento."
section4.appendChild(strong24section)

let div4section = document.createElement("div")
div4section.classList.add("d-flex","justify-content-center","pb-5")
section4.appendChild(div4section)

let div2div4section = document.createElement("div")
div2div4section.classList.add("w-50")
div4section.appendChild(div2div4section)

let a14section = document.createElement("a")
a14section.classList.add("btn","btn-primary","btn_suscribir","col-7","my-3","py-2")
a14section.type = "button"
a14section.innerText = "SUSCRÍBETE A PARAMOUNT+"
div2div4section.appendChild(a14section)

let a_array = ["YA TENGO PARAMOUNT+","INICIA SESIÓN CON TU PROVEEDOR"]

a_array.forEach(element => {
  let a14section = document.createElement("a")
  a14section.classList.add("btn","col-7","my-3","btn-outline-light","py-2")
  a14section.type = "button"
  a14section.innerText = `${element}`
  div2div4section.appendChild(a14section)
});

//footer

let footer = document.createElement("footer")
footer.classList.add("text-white-50","bg-dark","footer","py-4","px-5")
bodyPagina.appendChild(footer)

let img1footer = document.createElement("img")
img1footer .src = "assets/img/logo.svg"
img1footer .classList.add("logo")
footer.appendChild(img1footer)

let divfooter = document.createElement("div")
divfooter.classList.add("d-flex","justify-content-start","flex-row","pt-4")
footer.appendChild(divfooter)

let ul1footer = document.createElement("ul")
ul1footer.classList.add("ul")
divfooter.appendChild(ul1footer)

let li1footer = document.createElement("li")
ul1footer.appendChild(li1footer)

let h3lifooter = document.createElement("h3")
h3lifooter.classList.add("h3_titulo","pb-2")
h3lifooter.innerText ="Navegación del sitio"
li1footer.appendChild(h3lifooter)

let ul_array = ["Paramount+ Colombia","Paramount+ Global"]

ul_array.forEach(element => {
  let li2footer = document.createElement("li")
  li2footer.classList.add("mb-2")
  li2footer.innerText = `${element}`
  ul1footer.appendChild(li2footer)
});

let ul2footer = document.createElement("ul")
ul2footer.classList.add("ul")
divfooter.appendChild(ul2footer)

let li2footer = document.createElement("li")
ul2footer.appendChild(li2footer)

let h32lifooter = document.createElement("h3")
h32lifooter.classList.add("h3_titulo","pb-2")
h32lifooter.innerText ="Privacidad y términos"
li2footer.appendChild(h32lifooter)

let ul2_array = ["Acuerdo de Suscripción","Términos de Uso","Política de privacidad y Política","Política de cookies"]

ul2_array.forEach(element => {
  let li3footer = document.createElement("li")
  li3footer.classList.add("mb-2")
  li3footer.innerText = `${element}`
  ul2footer.appendChild(li3footer)
});

let ul3footer = document.createElement("ul")
ul3footer.classList.add("ul")
divfooter.appendChild(ul3footer)

let li4footer = document.createElement("li")
ul3footer.appendChild(li4footer)

let h4lifooter = document.createElement("h3")
h4lifooter.classList.add("h3_titulo","pb-2")
h4lifooter.innerText ="Soporte"
li4footer.appendChild(h4lifooter)

let ul3_array = ["Ayuda / Contáctanos","Guia de clasificaciones"]

ul3_array.forEach(element => {
  let li5footer = document.createElement("li")
  li5footer.classList.add("mb-2")
  li5footer.innerText = `${element}`
  ul3footer.appendChild(li5footer)
});

let div2footer = document.createElement("div")
footer.appendChild(div2footer)

let uldiv2footer = document.createElement("ul")
uldiv2footer.classList.add("mt-5")
div2footer.appendChild(uldiv2footer)

let divulfooter = document.createElement("div")
divulfooter.innerText = "© 2022 Paramount. Todos los derechos reservados."
uldiv2footer.appendChild(divulfooter)