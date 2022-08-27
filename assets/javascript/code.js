let bodyPagina = document.querySelector("body")
let navbar = document.createElement("nav")
navbar.classList.add("navbar","navbar-expand-lg")
bodyPagina.appendChild(navbar)

let div1Nav = document.createElement("div")
div1Nav.className = "container-fluid"
navbar.appendChild(div1Nav)

let div11Div = document.createElement("div")
div11Div.classList.add("row","my-3")
div1Nav.appendChild(div11Div)

let div111Div = document.createElement("div")
div111Div.classList.add("col-6","d-flex","justify-content-start")
div11Div.appendChild(div111Div)

let img111Div = document.createElement("img")
img111Div.src = "assets/img/logo.png"
img111Div.classList.add("logo")
div111Div.appendChild(img111Div)
let div1111Div = document.createElement("div")
div1111Div.classList.add("nav-item","d-flex","align-items-center","px-4")
div111Div.appendChild(div1111Div)

let a1111div = document.createElement("a")
a1111div.classList.add ("nav-link","px-4")
a1111div.innerText = "|"
div1111Div.appendChild(a1111div)
let a21111div = document.createElement("a")
a21111div.className = "nav-link"
a21111div.innerText = "HALO:"
div1111Div.appendChild(a21111div)
let a31111div = document.createElement("a")
a31111div.classList.add ("nav-link","px-2")
a31111div.innerText = "VER AHORA"
div1111Div.appendChild(a31111div)

let divdiv11Div = document.createElement("div")
divdiv11Div.innerText = "INICIAR SESIÓN"
divdiv11Div.classList.add("col-6","d-flex","justify-content-end")
div11Div.appendChild(divdiv11Div)
//termino navbar

let section = document.createElement("section")
section.className = "container-fluid"
bodyPagina.appendChild(section)

let divSect = document.createElement("div")
divSect.className = "row"
section.appendChild(divSect)

let div1DivSect = document.createElement("div")
div1DivSect.className = "col-6"
divSect.appendChild(div1DivSect)

let h1div = document.createElement("h1")
h1div.innerHTML ="HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
h1div.classList.add("h1","my-2","fw-bold")
div1DivSect.append(h1div)
let strongDiv = document.createElement("strong")
strongDiv.innerText = "Suscríbete por $13,900.00 COP al Mes."
div1DivSect.append(strongDiv)
let brStrong = document.createElement("br")
strongDiv.append(brStrong)
let strong2Div = document.createElement("strong")
strong2Div.innerText = "Cancela en cualquier momento."
div1DivSect.append(strong2Div)
let br2Strong = document.createElement("br")
let strong3Div = document.createElement("strong")
let br3Strong = document.createElement("br")
div1DivSect.append(br3Strong)
strong3Div.innerText = "Únete ahora y obtén 7 días gratis."
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