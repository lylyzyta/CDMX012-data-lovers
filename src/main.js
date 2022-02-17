import {personajesfilter, topCinco} from './data.js';
import data from './data/ghibli/ghibli.js';


//Inicio función para score

let resultado= document.getElementById("uno");

let onlyHTML=''

let datafilertopfive = topCinco(data.films)

datafilertopfive.forEach(movie=>{
    onlyHTML+= `<article class= "card"><h3>${movie.title}</h3><br><img src=${movie.poster}></img></article>`
})

resultado.innerHTML= onlyHTML; 
//Termina función para score




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

document.getElementById("filterFilm").addEventListener("change",function(event){
    personajesfilter(data.films, event.target.value)
})

// Termina botones
