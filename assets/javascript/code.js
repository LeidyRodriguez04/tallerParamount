let bodyPagina = document.querySelector("body")
let sectbody = document.createElement("section")
sectbody.classList.add("section_principal")
bodyPagina.appendChild(sectbody)
let navbar = document.createElement("nav")
navbar.classList.add("navbar","navbar-expand-lg")
sectbody.appendChild(navbar)

let div1Nav = document.createElement("div")
div1Nav.className = "container-fluid"
navbar.appendChild(div1Nav)

let div11Div = document.createElement("div")
div11Div.classList.add("row","my-2","mx-3","py-1")
div1Nav.appendChild(div11Div)

let div111Div = document.createElement("div")
div111Div.classList.add("col-9","d-flex","justify-content-start")
div11Div.appendChild(div111Div)

let img111Div = document.createElement("img")
img111Div.src = "assets/img/logo.svg"
img111Div.classList.add("logo")
div111Div.appendChild(img111Div)
let div1111Div = document.createElement("div")
div1111Div.classList.add("nav-item","d-flex","ps-4")
div111Div.appendChild(div1111Div)

let a1111div = document.createElement("a")
a1111div.classList.add ("linea")
div1111Div.appendChild(a1111div)

let a21111div = document.createElement("a")
a21111div.classList.add("nav-link","text-white-50","halo")
a21111div.innerText = "HALO:"
div1111Div.appendChild(a21111div)
let a31111div = document.createElement("a")
a31111div.classList.add ("nav-link","px-2","text-light")
a31111div.innerText = "VER AHORA"
div1111Div.appendChild(a31111div)

let divdiv11Div = document.createElement("div")
divdiv11Div.innerText = "INICIAR SESIÓN"
divdiv11Div.classList.add("col-3","d-flex","justify-content-end","text-light")
div11Div.appendChild(divdiv11Div)
//termino navbar

let section = document.createElement("section")
section.className = "container-fluid"
sectbody.appendChild(section)

let divSect = document.createElement("div")
divSect.className = "row"
section.appendChild(divSect)

let div1DivSect = document.createElement("div")
div1DivSect.className = "col-6"
divSect.appendChild(div1DivSect)

let h1div = document.createElement("h1")
h1div.innerHTML ="HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
h1div.classList.add("h1","my-2","fw-bold","text-light")
div1DivSect.append(h1div)
let strongDiv = document.createElement("strong")
strongDiv.innerText = "Suscríbete por $13,900.00 COP al Mes."
strongDiv.classList.add("text-light")
div1DivSect.append(strongDiv)
let brStrong = document.createElement("br")
strongDiv.append(brStrong)
let strong2Div = document.createElement("strong")
strong2Div.innerText = "Cancela en cualquier momento."
strong2Div.classList.add("text-light")
div1DivSect.append(strong2Div)
let br2Strong = document.createElement("br")
let strong3Div = document.createElement("strong")
let br3Strong = document.createElement("br")
div1DivSect.append(br3Strong)
strong3Div.innerText = "Únete ahora y obtén 7 días gratis."
strong3Div.classList.add("text-light")
div1DivSect.append(strong3Div)
let div3Divsect = document.createElement("div")
div3Divsect.classList.add("row","mt-2","mb-5","pt-2","mx-4")
div1DivSect.append(div3Divsect)

let a1divSect = document.createElement("a")
a1divSect.classList.add("btn","btn-primary","col-7","my-2")
a1divSect.type = "button"
a1divSect.innerText = "SUSCRÍBETE A PARAMOUNT+"
div3Divsect.appendChild(a1divSect)
let a2divSect = document.createElement("a")
a2divSect.classList.add("btn","btn-light","col-7","my-2")
a2divSect.type = "button"
a2divSect.innerText = "YA TENGO PARAMOUNT+"
div3Divsect.appendChild(a2divSect)
let a3divSect = document.createElement("a")
a3divSect.classList.add("btn","btn-light","col-7","my-2")
a3divSect.type = "button"
a3divSect.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
div3Divsect.appendChild(a3divSect)