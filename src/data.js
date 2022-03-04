// estas funciones son de ejemplo

export const example = () =>{
 //console.log("ejemplo");
};

export const topCinco = (filmes) => {
return filmes.filter(element=>element.rt_score>=96);
  };

export const imprimePersonajes = (filmes) => {
  let arrayCharact=[];
  for(const value of filmes){
    for(const characters of value.people){
      arrayCharact.push(characters)  
    }}return (arrayCharact);
};
  
  export const personajesfilter = (filmes, criterio) => {     
    if(criterio == "Películas"){
      let arrayCharact=[];
    for(const value of filmes){
    for(const characters of value.people){
      arrayCharact.push(characters)
    }}return(arrayCharact);

    }else{
      let titleFilter = filmes.filter(element => element.title == criterio);
      let peopleFilter= titleFilter[0].people;
      return peopleFilter }  
    };


export const filtroPorGenero  = (personaje,criterio) =>{
  if(criterio == "Género"){
    return personaje;
  }else{
  let personajesFilter = personaje.filter(element => element.gender == criterio);
  return personajesFilter ;
  }
};

export const filtroPorEspecie = (personaje,criterio) =>{
  if(criterio == "Especie"){
    return personaje;

  } else if (criterio == "Human"){
  let specieHumanaFilter= personaje.filter(element => element.specie == "Human" || element.specie == "Borrower" || element.specie == "unknown" || element.specie == "Human/Scarecrow"); 
  return specieHumanaFilter;

  } else if (criterio == "Animales"){
    let specieHumanaFilter= personaje.filter(element => element.specie == "Totoro" || element.specie == "Cat" 
    || element.specie == "Wolf" || element.specie == "Raccoon Dog" || element.specie == "Dog"
    || element.specie == "Red elk" || element.specie == "Fish/Human" || element.specie == "Raccoon Dog" 
    || element.specie == "Bird"); 
    return specieHumanaFilter;

  }else if (criterio == "Deidades"){
    let specieHumanaFilter= personaje.filter(element => element.specie == "Demon" || element.specie == "Spirit" 
    || element.specie == "Deity, Dragon" || element.specie =="Spirit of The White Fox" || element.specie == "Deity"); 
    return specieHumanaFilter;
  
  }else if (criterio == "Magos y Brujas"){
    let specieHumanaFilter= personaje.filter(element => element.specie == "Wizard" || element.specie == "Witch" 
    || element.specie == "Witch/Human" || element.specie == "Arch-mage/Human"); 
    return specieHumanaFilter;
  }
};

export const filtroPorEdad = (personaje,criterio) =>{
  if(criterio == "Edad"){
    return personaje;

  }else if (criterio == "Niño"){
  let filtroPorEdad = personaje.filter(element => element.age <21 || element.age == "Child" || element.age =="circa 14-17" || element.age =="12 (in appearance)" || element.age == "12-14"|| element.age == "Teenager");
  return filtroPorEdad;

} else if (criterio =="Adulto"){
  let filtroPorEdad= personaje.filter(element => element.age >=21 && element.age <=60 || element.age == "Adult" || element.age == "circa 23-35"|| element.age == "Unspecified/Adult"|| element.age=="Middle Age" || element.age == "At least 40 years"|| element.age == "NA"|| element.age == "Unknown" || element.age== "20-30" || element.age == "Young"); 
  return filtroPorEdad;

} else if (criterio == "Anciano"){
  let filtroPorEdad= personaje.filter(element => element.age >60 || element.age =="Elder" || element.age =="Over 50"|| element.age == "Unspecified/Ederly" || element.age == "50-60");
  return filtroPorEdad;
} 
};








  
