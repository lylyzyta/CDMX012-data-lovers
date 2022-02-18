// estas funciones son de ejemplo

export const example = () =>{
 //console.log("ejemplo");
};

export const topCinco = (films) => {
 return films.filter(element=>element.rt_score>=96
  );
  };

export const personajesfilter = (films, criterio) => {
   let titleFilter = films.filter(element => element.title == criterio);
   let peopleFilter= titleFilter[0].people;
    return peopleFilter
  };
export const caracteristicafilter = (personaje,criterio) =>{
  let personajesFilter = personaje.filter(element => element.gender == criterio);

  return personajesFilter
 
}



  
