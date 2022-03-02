//import { Chart } from 'chart.js';
import {topCinco, specieFilter,imprimePersonajes, personajesfilter, caracteristicafilter,edadFilter, sortByAZMovies} from './data.js';
import data from './data/ghibli/ghibli.js';

//Inicia función para score
let resultado= document.getElementById("uno");
let onlyHTML=''
let datafilertopfive = topCinco(data.films);

datafilertopfive.forEach(movie=>{
    onlyHTML+= `<article class= "card"><h3>${movie.title}</h3><br><img src=${movie.poster}></img></article>`
})
resultado.innerHTML= onlyHTML; 
//Termina función para score

/*/Inicia función para vehículos
let resultado6= document.getElementById("uno");
let onlyHTML6=''
let vehiclesdatafilter = vehiclesfilter(data.films);

vehiclesdatafilter.forEach(car=>{
    onlyHTML6+= `<article class= "card"><h3>${car.name}</h3><br><img src=${car.img}></img></article>`
})
resultado6.innerHTML= onlyHTML6; 
//Termina función para vehículos

//Inicia función para locaciones
let resultado7= document.getElementById("uno");
let onlyHTML7=''
let locationsdatafilter = locationsfilter(data.films);

locationsdatafilter.forEach(location=>{
    onlyHTML7+= `<article class= "card"><h3>${location.name}</h3><br><img src=${location.img}></img></article>`
})
resultado7.innerHTML= onlyHTML7; 
//Termina función para locaciones*/

let directorTotal,
    HayaoMiyazakiPorcentaje,
    IsaoTakahataPorcentaje,
    YoshifumiKondōPorcentaje,
    HiroyukiMoritaPorcentaje,
    GorōMiyazakiPorcentaje,
    HiromasaYonebayashiPorcentaje,   
    HayaoMiyazaki = 0,
    IsaoTakahata = 0,
    YoshifumiKondō = 0,
    HiroyukiMorita = 0,
    GorōMiyazaki = 0,
    HiromasaYonebayashi = 0,   
    resultadoPorcentaje = [];
const variables = ['HayaoMiyazaki', 'IsaoTakahata' , 'YoshifumiKondō', 'HiroyukiMorita', 'GorōMiyazaki', 'HiromasaYonebayashi' ];

const grafica = document.querySelector('#myChart');
const movies = data.films;
function directorPersonajes(movies){
    movies.forEach(movie=>{
    if(movie.director ==="Hayao Miyazaki"){
    HayaoMiyazaki +=1;
    }else
    if (movie.director ==="Isao Takahata") 
    {IsaoTakahata +=1;
    }else
    if(movie.director ==="Yoshifumi Kondō")
    { YoshifumiKondō +=1;
    }else
    if (movie.director ==="Hiroyuki Morita") 
    {HiroyukiMorita +=1;
    }else
    if(movie.director ==="Gorō Miyazaki")
    {GorōMiyazaki +=1;
    }else {HiromasaYonebayashi +=1;}
});
}
directorPersonajes(movies);
cargarGrafica(grafica);

    directorTotal= HayaoMiyazaki + IsaoTakahata + YoshifumiKondō + HiroyukiMorita +GorōMiyazaki+HiromasaYonebayashi;
    HayaoMiyazakiPorcentaje = (HayaoMiyazaki *100) / directorTotal;
    IsaoTakahataPorcentaje = (IsaoTakahata *100) / directorTotal;
    YoshifumiKondōPorcentaje = (YoshifumiKondō *100) / directorTotal;
    HiroyukiMoritaPorcentaje = (HiroyukiMorita *100) / directorTotal;
    GorōMiyazakiPorcentaje = (GorōMiyazaki *100) / directorTotal;
    HiromasaYonebayashiPorcentaje = (HiromasaYonebayashi*100)/directorTotal;
    resultadoPorcentaje.push(HayaoMiyazakiPorcentaje);
    resultadoPorcentaje.push(IsaoTakahataPorcentaje);
    resultadoPorcentaje.push(YoshifumiKondōPorcentaje);
    resultadoPorcentaje.push(HiroyukiMoritaPorcentaje);
    resultadoPorcentaje.push(GorōMiyazakiPorcentaje);
    resultadoPorcentaje.push(HiromasaYonebayashiPorcentaje);

function cargarGrafica(grafica){
    const myChart = new Chart(grafica, {
        type: 'bar',
        data: {
            labels: variables,
            datasets: [
            {
                label: 'PORCENTAJE DE DIRECTORES POR EL TOTAL DE P',
                data: resultadoPorcentaje,
                backgroundColor: [
                    'red',
                    'blue',
                    'black',
                    'gray',
                    'yellow',
                    'green'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    return myChart;
}
//Inicia función imprimir todos los personajes
let resultado1= document.getElementById("dos");
let onlyHTML1=''
let imprimirPersonajes = imprimePersonajes(data.films);
imprimirPersonajes.forEach(personas=> {
    onlyHTML1+= ` <div class="flip-container"><div class="cardpersonajes"><article class="front"><h3>${personas.name}</h3><img src=${personas.img}></img></article><article class="back"><h3>Especie: ${personas.specie}</h3><h3>Edad: ${personas.age}</h3><h3>Color de ojos:<br> ${personas.eye_color}</h3><h3>Color de Cabello: ${personas.hair_color}</h3></article></div></div> `
})
resultado1.innerHTML= onlyHTML1; 
//Finaliza función imprimir todos los personajes
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
    //console.log(specieFilter)
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
//segunda versión de sliderpeliculas 
const  tarjetasPeliculas = document.querySelector('#carrusel');
const films = data.films;
const templateMovieCard = document.getElementById("templatemoviecards").content;
const fragment= document.createDocumentFragment();
films.forEach(pelicula =>{
    templateMovieCard.querySelector('h3').textContent = pelicula.title;
    templateMovieCard.querySelector('img').src= pelicula.poster;
    templateMovieCard.querySelector('p').textContent = "Descripción:  " + pelicula.description /*+ "                " + 
    "Director: " + pelicula.director + "                  " +
    "Productor: " + pelicula.producer ; */
    const clone = templateMovieCard.cloneNode(true)
    fragment.appendChild(clone);
})
tarjetasPeliculas.appendChild(fragment);
const fila = document.getElementById("carruseldiv")
document.getElementById("beforearrow").addEventListener('click',() =>{
Math.ceil(fila.scrollLeft -= fila.offsetWidth); 
});
document.getElementById("afterarrow").addEventListener('click',()=>{
Math.ceil(fila.scrollLeft += fila.offsetWidth);
})
//Función para selector Sort 
let sortfilms = document.getElementById("sortfilms");
sortfilms.addEventListener('change', (e)=>{
    let sort = e.target.value;
    console.log(sortByAZMovies(sort,films))},
   function sortByAZMovies(sortedFilms){
    sortedFilms.forEach(sortedFilm =>{
        templateMovieCard.querySelector('h3').textContent = sortedFilm.title;
        templateMovieCard.querySelector('img').src= sortedFilm.poster;
        templateMovieCard.querySelector('h4').textContent = "Descripción:  " + sortedFilm.description + "                " + 
        "Director: " + sortedFilm.director + "                  " +
        "Productor: " + sortedFilm.producer ;
        const clone = templateMovieCard.cloneNode(true)
        fragment.appendChild(clone);
    })  
   }
);

//Inicia  Botones

document.getElementById("btnEntrar").addEventListener("click", function() {
    document.getElementById("catalogo").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("inicio").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("personajes").style.display="none";
});

    document.getElementById("btnRegresa").addEventListener("click", function() {
    document.getElementById("inicio").style.display="block";
    document.getElementById("pagina").style.display="none";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
});

    document.getElementById("btnPeliculas").addEventListener("click", function() {
    document.getElementById("inicio").style.display="none";
    document.getElementById("pagina").style.display="block";
    document.getElementById("catalogo").style.display="block";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("personajes").style.display="none";
    
});


document.getElementById("btndatosGhibli").addEventListener("click", function() {
    document.getElementById("pagina").style.display="block";
    document.getElementById("datosGhibli").style.display="block";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("personajes").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});

document.getElementById("btnPersonajes").addEventListener("click", function() {
    document.getElementById("personajes").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("catalogo").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});
// Termina botones