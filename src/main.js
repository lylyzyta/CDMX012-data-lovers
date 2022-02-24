import {specieFilter,imprimePersonajes, personajesfilter, topCinco, caracteristicafilter,edadFilter } from './data.js';
import data from './data/ghibli/ghibli.js';
//Imprimir personajes
let resultado1= document.getElementById("dos");
let onlyHTML1=''
let imprimirPersonajes = imprimePersonajes(data.films);
imprimirPersonajes.forEach(personas=> {
    onlyHTML1+= ` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${personas.name}</h3><img src=${personas.img}></img></article><article class="back"><h3>Especie: ${personas.specie}</h3><h3>Edad: ${personas.age}</h3><h3>Color de ojos:<br> ${personas.eye_color}</h3><h3>Color de Cabello: ${personas.hair_color}</h3></article></div></div> `
})
resultado1.innerHTML= onlyHTML1; 
/*let arrayPeople = [element.name, element.img, element.age, element.specie, element.gender];
let totalPeople = [];
totalPeople.push(arrayPeople);
console.log(totalPeople.flat());*/
//Inicio función para score
let resultado= document.getElementById("uno");

let onlyHTML=''

let datafilertopfive = topCinco(data.films)

datafilertopfive.forEach(movie=>{
    onlyHTML+= `<article class= "card"><h3>${movie.title}</h3><br><img src=${movie.poster}></img></article>`
})

resultado.innerHTML= onlyHTML; 
//Termina función para score
//Funcion filtro personajes y tarjetas 
document.getElementById("filterFilm").addEventListener("change",function(event){
    personajesfilter(data.films, event.target.value)
    let resultadoDos = document.getElementById("dos")
    let onlyHTMLDos = ''
    let datafilterpeople = personajesfilter(data.films,event.target.value)
    datafilterpeople.forEach(persona=>{
        onlyHTMLDos+=` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="back"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello: ${persona.hair_color}</h3></article></div></div> `
    });
    resultadoDos.innerHTML=onlyHTMLDos;
    // funcion filtro por pelicula/genero/especie/edad
    document.getElementById("filtercharacter").addEventListener("change",function(event){
        caracteristicafilter (datafilterpeople, event.target.value)

        let resultadoTres = document.getElementById("dos")
        let onlyHTMLTres = ''
        let datafiltercharacter = caracteristicafilter(datafilterpeople,event.target.value)
        datafiltercharacter.forEach(persona=>{
        onlyHTMLTres+=` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="back"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
        });
    resultadoTres.innerHTML=onlyHTMLTres
});
document.getElementById("filterspecie").addEventListener("change",function(event){
    specieFilter(datafilterpeople, event.target.value)
    console.log(specieFilter)
    let resultadoCuatro = document.getElementById("dos")
        let onlyHTMLCuatro = ''
        let datafilterspecie = specieFilter(datafilterpeople,event.target.value)
        datafilterspecie.forEach(persona=>{
        onlyHTMLCuatro+=` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="back"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
        });
    resultadoCuatro.innerHTML=onlyHTMLCuatro
})
document.getElementById("filterage").addEventListener("change",function(event){
    edadFilter(datafilterpeople, event.target.value)
    let resultadoCinco = document.getElementById("dos");
        let onlyHTMLCinco = ''
        let datafilterage = edadFilter(datafilterpeople || data.films , event.target.value);
        datafilterage.forEach(persona =>{
            onlyHTMLCinco+=` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="back"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
        });
        resultadoCinco.innerHTML=onlyHTMLCinco
})
});


//funciones modal 
popUpOpen(300);
function popUpOpen (width){
    let popUpPadre = document.createElement("div")
    popUpPadre.className="popUpPadre";
    popUpPadre.id="popUpPadre";


    let popUpHijo = document.createElement("div")
    popUpHijo.className="popUpHijo";
    popUpHijo.id="popUpHijo"
    popUpHijo.style.width=width+"px"
    document.body.appendChild(popUpPadre);
    popUpPadre.appendChild(popUpHijo)

}

//funcion del slider de peliculas
(function(){
    const sliders = [...document.querySelectorAll(".sliderBody")];
    const arrowBefore = document.querySelector("#before");
    const arrowAfter = document.querySelector("#after");
    let value;

    arrowAfter.addEventListener("click", ()=>changePosition(1));
    arrowBefore.addEventListener("click", ()=>changePosition(-1));

    function changePosition(change){
        const currentElement= Number(document.querySelector(".showPanel").dataset.id);
        value = currentElement;
        value += change;
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement-1].classList.toggle("showPanel");
        sliders[value-1].classList.toggle("showPanel");
        
    
    }
})()
//acá termina el slider de películas


//Inicia  Botones

document.getElementById("btnEntrar").addEventListener("click", function() {
    document.getElementById("catalogo").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("inicio").style.display="none";
    document.getElementById("topCinco").style.display="none";
    document.getElementById("personajes").style.display="none";
});

    document.getElementById("btnRegresa").addEventListener("click", function() {
    document.getElementById("inicio").style.display="block";
    document.getElementById("pagina").style.display="none";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("topCinco").style.display="none";
});

    document.getElementById("btnPeliculas").addEventListener("click", function() {
    document.getElementById("inicio").style.display="none";
    document.getElementById("pagina").style.display="block";
    document.getElementById("catalogo").style.display="block";
    document.getElementById("topCinco").style.display="none";
    document.getElementById("personajes").style.display="none";
    
});


document.getElementById("btnTopcinco").addEventListener("click", function() {
    document.getElementById("pagina").style.display="block";
    document.getElementById("topCinco").style.display="block";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("personajes").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});

document.getElementById("btnPersonajes").addEventListener("click", function() {
    document.getElementById("personajes").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("topCinco").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});

document.getElementById("buttonmodal").addEventListener("click",function(){
    document.getElementById("popUpPadre").style.display="block";
})


// Termina botones