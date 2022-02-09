import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

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

document.getElementById("btnEntrar").addEventListener("click", function() {
    document.getElementById("catalogo").style.display="block";
    document.getElementById("inicio").style.display="none";
    
});

document.getElementById("btnRegresa").addEventListener("click", function() {
    document.getElementById("inicio").style.display="block";
    document.getElementById("catalogo").style.display="none";
    
});
//función para pantalla modal 
const openModal = document.getElementById("buttonmodal");
const modalWindow = document.getElementById("modal_container");
const closeModal = document.getElementById("closeBtn");

openModal.addEventListener("click", ()=>{
    modalWindow.style.display="flex";
})
closeModal.addEventListener("click", ()=>{
    modalWindow.style.display="none";
})

