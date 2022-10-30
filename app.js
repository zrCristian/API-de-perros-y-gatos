async function cargarPerros() {
    const respuesta = await fetch("https://api.thedogapi.com/v1/images/search")

    const datos = await respuesta.json()
    traerDatos(datos)
}

async function cargarGatos() {
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search")

    const datos = await respuesta.json();
    traerDatos (datos);
}

function traerDatos(data) {
    image.setAttribute("src", `${data[0].url}`)
    // console.log(image.src)
    // console.log(image.getAttribute("src")) 
}

const btn_switch = document.querySelector(".switch")




//
const image = document.querySelector("img")
const span_texto = document.querySelector(".span")
let perro = "true"

function eleccionPerrosGatos(booleano) {
    localStorage.setItem("animal-perro", booleano);

    if (booleano === "true") {
        cargarPerros()
        btn_switch.classList.remove("active")
        span_texto.innerHTML = "Perros"
    } else {
        localStorage.setItem("animal-perro", "false")
    }
    
    if (booleano === "false") {
        cargarGatos()
        btn_switch.classList.add("active")
        span_texto.innerHTML = "Gatos"
    }     
}

eleccionPerrosGatos(localStorage.getItem("animal-perro") || perro)

btn_switch.addEventListener("click", () => {
    let esPerro = localStorage.getItem("animal-perro") === "true" ? "false" : "true"
    btn_switch.classList.toggle("active")
    imgRefresh()

    eleccionPerrosGatos(esPerro)
})




// const image = document.querySelector("img")


const button = document.getElementById("button")

button.addEventListener("click", reloadImage);

function reloadImage() {
    eleccionPerrosGatos(localStorage.getItem("animal-perro"))
    // location.reload(false);
    
    // image.classList.add("filtro")
    // image.addEventListener("load", imgRefresh)
    imgRefresh()
}

function imgRefresh() {
    image.classList.add("filtro")
    image.addEventListener("load", () => image.classList.remove("filtro"))

    
    // image.classList.remove("filtro")
}

const acordeon = document.querySelector(".container-acordeon-flecha");
const textoParrafo = document.getElementById("texto");
const arrowIcon = document.querySelector(".arrow-icon")
const textoButton = document.querySelector(".acordeon")

acordeon.addEventListener("click", () => {
    texto.classList.toggle("panel")
    arrowIcon.classList.toggle("rotate")
})



// descargar imagen 
function downloadImage(url, name) {

    fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert("error pa"));

    // document.body.removeChild(link)

}


btnDonwload = document.querySelector(".download")
btnDonwload.addEventListener("click", ejecutar)

function ejecutar() {
    let imgRandom = image.getAttribute("src"); 
    // let imgRandom = image.src 

    downloadImage(imgRandom, "perro.jpg")
}



// modal IMG

const modal = document.querySelector(".modal-img")
const close = document.querySelector(".close")
const img_modal = document.querySelector(".add-img")

const icono = document.querySelector(".icono")

icono.addEventListener("click", () => {
    modal.style.display = "block"
    img_modal.src = image.src
})

close.addEventListener("click", () => modal.style.display = "none")
// modal.addEventListener("click", () => modal.style.display = "none")


//
const cuerpo = document.querySelector("body")

cuerpo.addEventListener("keydown", e => {
    let teclaF = e.key.toLowerCase()
    if (teclaF === "f") {
        if(modal.style.display === "block") {
            modal.style.display = "none"
        } else {
            modal.style.display = "block"
            img_modal.src = image.src
        }
    }

    console.log(modal.style.display === "block")

    let salir = e.key
    if (salir === "Escape"){
        modal.style.display = "none"
        console.log("tecla escape")
    } else {
        console.log("tecla RANDOM")
    }

    

})