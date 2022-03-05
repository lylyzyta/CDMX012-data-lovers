import {topCinco, filtroPorEspecie ,imprimePersonajes, personajesfilter, filtroPorGenero ,filtroPorEdad } from './data.js';
import data from './data/ghibli/ghibli.js';

//Segunda versión de sliderpeliculas 
const tarjetasPeliculas = document.querySelector('#carrusel');
const filmes = data.films;
const templateMovieCard = document.getElementById("templatetarjetaspeliculas").content;
const fragment= document.createDocumentFragment();
    filmes.forEach(pelicula =>{
    templateMovieCard.querySelector('h3').textContent = pelicula.title;
    templateMovieCard.querySelector('img').setAttribute("src", pelicula.poster);
    templateMovieCard.querySelector('p').textContent = "Descripción:  " + pelicula.description;
    let $clone = templateMovieCard.cloneNode(templateMovieCard,true);
    fragment.appendChild($clone);
    })
tarjetasPeliculas.appendChild(fragment);
const fila = document.getElementById("carruselcontainer")
document.getElementById("flechaizquierda").addEventListener('click',() =>{
Math.ceil(fila.scrollLeft -= fila.offsetWidth); 
});
document.getElementById("flechaderecha").addEventListener('click',()=>{
Math.ceil(fila.scrollLeft += fila.offsetWidth);
})
//Termina slider películas
//Inicia imprime fitro topCinco
let resultado= document.getElementById("imprimetopcinco");
let onlyHTML='';
let filtrodatatopcinco = topCinco(data.films);
filtrodatatopcinco.forEach(movie=>{
    onlyHTML+= `<article class= "tarjeta"><h3>${movie.title}</h3><br><img src=${movie.poster}></img></article>`
});
resultado.innerHTML= onlyHTML;
//Termina imprime fitro topCinco
//Inicia función Chart para gráfica de directores
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
  // eslint-disable-next-line no-undef
    const myChart= new Chart(grafica,{
        type: 'bar',
        data: {
            labels: variables,
            datasets: [
            {
                label: '',
                data: resultadoPorcentaje,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
//Termina función Chart para gráfica de directores
//Inicia fitro imprimir todos los personajes
let resultadoImprimirPersonajes= document.getElementById("imprimirpersonajes");
let onlyHtmlPersonaje=''
let imprimirPersonajes = imprimePersonajes(data.films);
imprimirPersonajes.forEach(personas=> {
    onlyHtmlPersonaje+= ` <div class="contenedor-flip"><div class="cardpersonajes"><article class="frente"><h3>${personas.name}</h3><img src=${personas.img}></img></article><article class="posterior"><h3>Especie: ${personas.specie}</h3><h3>Edad: ${personas.age}</h3><h3>Color de ojos:<br> ${personas.eye_color}</h3><h3>Color de Cabello: ${personas.hair_color}</h3></article></div></div> `
})
resultadoImprimirPersonajes.innerHTML= onlyHtmlPersonaje; 
//Finaliza filtro imprimir todos los personajes
//Inicia  filtro personajes por película
document.getElementById("filterpeliculas").addEventListener("change",function(event){
    personajesfilter(data.films, event.target.value)
    let resultadoPersonajesXPelicula = document.getElementById("imprimirpersonajes")
    let onlyHtmlPelicula = ''
    let dataPersonajes = personajesfilter(data.films,event.target.value)
    dataPersonajes.forEach(persona=>{
        onlyHtmlPelicula+=` <div class="contenedor-flip"><div class="cardpersonajes"><article class="frente"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="posterior"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello: ${persona.hair_color}</h3></article></div></div> `
    });
    resultadoPersonajesXPelicula.innerHTML=onlyHtmlPelicula;
//Termina filtro personajes por película 
// Inicia filtro por género
document.getElementById("filtergenero").addEventListener("change",function(event){
    filtroPorGenero (dataPersonajes, event.target.value)
    let resultadoGenero = document.getElementById("imprimirpersonajes")
    let onlyHTMLGenero = ''
    let datafiltergenero = filtroPorGenero (dataPersonajes,event.target.value)
    datafiltergenero.forEach(persona=>{
    onlyHTMLGenero+=` <div class="contenedor-flip"><div class="cardpersonajes"><article class="frente"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="posterior"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
    });
    resultadoGenero.innerHTML=onlyHTMLGenero
});
// Termina filtro por género
// Inicia filtro por especie
document.getElementById("filterespecie").addEventListener("change",function(event){
    filtroPorEspecie(dataPersonajes, event.target.value)
    //console.log(specieFilter)
    let resultadoEspecie= document.getElementById("imprimirpersonajes")
        let onlyHtmlEspecie = ''
        let datafilterespecie = filtroPorEspecie(dataPersonajes,event.target.value)
        datafilterespecie.forEach(persona=>{
        onlyHtmlEspecie+=` <div class="contenedor-flip"><div class="cardpersonajes"><article class="frente"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="posterior"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
        });
    resultadoEspecie.innerHTML=onlyHtmlEspecie
})
// Termina filtro por especie
// Inicia filtro por edad
document.getElementById("filteredad").addEventListener("change",function(event){
    filtroPorEdad(dataPersonajes, event.target.value)
    let resultadoEdad = document.getElementById("imprimirpersonajes");
        let onlyHtmlEdad = ''
        let datafilteredad =filtroPorEdad(dataPersonajes || data.films , event.target.value);
        datafilteredad.forEach(persona =>{
            onlyHtmlEdad+=` <div class="contenedor-flip"><div class="cardpersonajes"><article class="frente"><h3>${persona.name}</h3><img src=${persona.img}></img></article><article class="posterior"><h3>Especie: ${persona.specie}</h3><h3>Edad: ${persona.age}</h3><h3>Color de ojos:<br> ${persona.eye_color}</h3><h3>Color de Cabello:<br> ${persona.hair_color}</h3></article></div></div> `
        });
        resultadoEdad.innerHTML=onlyHtmlEdad
})
});
// Termina filtro por edad
//Inicia  Botones
document.getElementById("btnEntrar").addEventListener("click", function() {
    document.getElementById("pantallapeliculas").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("inicio").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("personajes").style.display="none";
});

    document.getElementById("btnRegresa").addEventListener("click", function() {
    document.getElementById("inicio").style.display="block";
    document.getElementById("pagina").style.display="none";
    document.getElementById("pantallapeliculas").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
});

    document.getElementById("btnPeliculas").addEventListener("click", function() {
    document.getElementById("inicio").style.display="none";
    document.getElementById("pagina").style.display="block";
    document.getElementById("pantallapeliculas").style.display="block";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("personajes").style.display="none";
    
});
document.getElementById("btndatosGhibli").addEventListener("click", function() {
    document.getElementById("pagina").style.display="block";
    document.getElementById("datosGhibli").style.display="block";
    document.getElementById("pantallapeliculas").style.display="none";
    document.getElementById("personajes").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});

document.getElementById("btnPersonajes").addEventListener("click", function() {
    document.getElementById("personajes").style.display="block";
    document.getElementById("pagina").style.display="block";
    document.getElementById("pantallapeliculas").style.display="none";
    document.getElementById("datosGhibli").style.display="none";
    document.getElementById("inicio").style.display="none";
    
});
// Termina botones