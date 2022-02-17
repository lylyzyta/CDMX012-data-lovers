// estas funciones son de ejemplo

export const example = () =>{
 //console.log("ejemplo");
};

export const topCinco = (films) => {
 return films.filter(element=>element.rt_score>=96
  );
  };

export const personajesfilter = (films, criterio) => {
    console.log(`Recibi:`)
    console.log(films)
    console.log(criterio)

   let resultado = films.filter(element=> element == criterio);
   console.log(resultado);
   
  };



  
