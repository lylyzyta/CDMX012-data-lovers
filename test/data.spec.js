import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {topCinco, imprimePersonajes, personajesfilter,filtroPorGenero,filtroPorEspecie, filtroPorEdad} from '../src/data.js';
//import dataMockeada  from './dataMock'
//Test Función topCinco
describe('topCinco', () => {
  it('is a function', () => {
    expect(typeof topCinco).toBe('function');
  });

  it('returns `topCinco`', () => {
    const filmes=
    [
      {
          "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        "title": "Kiki's Delivery Service",
        "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        "release_date": "1989",
        "rt_score": "96",
      },
      { 
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "95",
      },
    ]
      expect(topCinco(filmes)).toEqual(
        [
          {
            "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
            "title": "Kiki's Delivery Service",
            "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
            "director": "Hayao Miyazaki",
            "producer": "Hayao Miyazaki",
            "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
            "release_date": "1989",
            "rt_score": "96",
          }
        ],);
        });
})
describe('imprimePersonajes',()=>{
  it('is a function', () => {
    expect(typeof imprimePersonajes).toBe('function');
  });
})
it('returns `imprimePersonajes`', () => {
const pelicula=
[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [ 
              {
                "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
                "name": "Pazu",
                "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
                "gender": "Male",
                "age": "13",
                "eye_color": "Black",
                "hair_color": "Brown",
                "specie": "Human"
            },
              { 
                "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
                "name": "Lusheeta Toel Ul Laputa",
                "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
                "gender": "Female",
                "age": "13",
                "eye_color": "Black",
                "hair_color": "Black",
                "specie": "Human"
              },
              {
                "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
                "name": "Dola",
                "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
                "gender": "Female",
                "age": "60",
                "eye_color": "Black",
                "hair_color": "Peach",
                "specie": "Human"
              },
              ]},
]
  expect (imprimePersonajes(pelicula)).toEqual(
  [
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Human"
    },
    {
    "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
    "name": "Dola",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
    "gender": "Female",
    "age": "60",
    "eye_color": "Black",
    "hair_color": "Peach",
    "specie": "Human"
    }
  ]);
    })
    describe('personajesfilter',()=>{
      it('is a function', () => {
        expect(typeof personajesfilter).toBe('function');
      });
    })
    it('`returns personajesfilter`', () => {
      const peliculas =
      [
        {
              "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
              "title": "Castle in the Sky",
              "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
              "director": "Hayao Miyazaki",
              "producer": "Isao Takahata",
              "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
              "release_date": "1986",
              "rt_score": "95",
              "people": [
              {
                  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
                  "name": "Pazu",
                  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
                  "gender": "Male",
                  "age": "13",
                  "eye_color": "Black",
                  "hair_color": "Brown",
                  "specie": "Human"
              },
              {
                  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
                  "name": "Lusheeta Toel Ul Laputa",
                  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
                  "gender": "Female",
                  "age": "13",
                  "eye_color": "Black",
                  "hair_color": "Black",
                  "specie": "Human"
              },
            ]
        },
          {
              "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
              "title": "Howl's Moving Castle",
              "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
              "director": "Hayao Miyazaki",
              "producer": "Toshio Suzuki",
              "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
              "release_date": "2004",
              "rt_score": "87",
              "people": [
                {
                  "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
                  "name": "Howl Jenkins Pendragon",
                  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
                  "gender": "Male",
                  "age": "27",
                  "eye_color": "Bright blue",
                  "hair_color": "Bright blue",
                  "specie": "Wizard"
                },
                {
                  "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
                  "name": "Sophie Hatter",
                  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
                  "gender": "Female",
                  "age": "18",
                  "eye_color": "Brown",
                  "hair_color": "White",
                  "specie": "Human"
                }, 
                          ]},
                        
    ]
    expect (personajesfilter(peliculas,"Películas")).toEqual(
      [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
      },
      {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
      },
      {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
        "gender": "Male",
        "age": "27",
        "eye_color": "Bright blue",
        "hair_color": "Bright blue",
        "specie": "Wizard"
      },
      {
        "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
        "name": "Sophie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Human"
      },
    ])
    expect(personajesfilter(peliculas,"Castle in the Sky")).toEqual(
      [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
    },
    {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
    },
      ])
    })
describe('filtroPorGenero',()=>{
  it('is a function',()=>{
    expect(typeof filtroPorGenero).toBe('function');
  });
})
it ('`returns filtroPorGeneror`',()=>{
  const personaje=[
    {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
    },
    {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
    },
  ]
  expect(filtroPorGenero(personaje,"Género")).toEqual([
    {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
    },
    {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
    },
  ]
  )
  expect(filtroPorGenero(personaje,"Male")).toEqual([
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
  },
  ])
  expect(filtroPorGenero(personaje,"Female")).toEqual([
    {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
  },
  ]
  )
})
//Test especies////
describe('specieFilter',()=>{
  it('is a function', () => {
    expect(typeof filtroPorEspecie).toBe('function');
  });
})
it('`returns filtroPorEspecie`', () => {
  const personajes =
  [
          {
              "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
              "name": "Pazu",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
              "gender": "Male",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Brown",
              "specie": "Human"
          },
          {
              "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
              "name": "Lusheeta Toel Ul Laputa",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
              "gender": "Female",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Black",
              "specie": "Human"
          },
            {
              "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
              "name": "Howl Jenkins Pendragon",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
              "gender": "Male",
              "age": "27",
              "eye_color": "Bright blue",
              "hair_color": "Bright blue",
              "specie": "Wizard"
            },
            {
              "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
              "name": "Sophie Hatter",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
              "gender": "Female",
              "age": "18",
              "eye_color": "Brown",
              "hair_color": "White",
              "specie": "Human"
            }, 
                      ];
expect(filtroPorEspecie(personajes,"Especie")).toEqual(
  [
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
  },
  {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
  },
  {
    "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
    "name": "Howl Jenkins Pendragon",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
    "gender": "Male",
    "age": "27",
    "eye_color": "Bright blue",
    "hair_color": "Bright blue",
    "specie": "Wizard"
  },
  {
    "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
    "name": "Sophie Hatter",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
    "gender": "Female",
    "age": "18",
    "eye_color": "Brown",
    "hair_color": "White",
    "specie": "Human"
  },
]),
expect(filtroPorEspecie(personajes,"Human")).toEqual(
  [
  {
"id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
  },
  {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
  },
{
    "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
    "name": "Sophie Hatter",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
    "gender": "Female",
    "age": "18",
    "eye_color": "Brown",
    "hair_color": "White",
    "specie": "Human"
  },
]),
expect(filtroPorEspecie(personajes,"Animales")).toEqual(
  []),
expect(filtroPorEspecie(personajes,"Deidades")).toEqual(
  []),
expect(filtroPorEspecie(personajes,"Magos y Brujas")).toEqual(
  [
  {

    "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
    "name": "Howl Jenkins Pendragon",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
    "gender": "Male",
    "age": "27",
    "eye_color": "Bright blue",
    "hair_color": "Bright blue",
    "specie": "Wizard"
  }

]);
})
//Filtro Edad//
describe('filtroPorEdad',()=>{
  it('is a function', () => {
    expect(typeof filtroPorEdad).toBe('function');
  });
})
it('`returns filtroPorEdad`', () => {
  const personas =
  [
    {
              "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
              "name": "Pazu",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
              "gender": "Male",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Brown",
              "specie": "Human"
          },
          {
              "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
              "name": "Lusheeta Toel Ul Laputa",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
              "gender": "Female",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Black",
              "specie": "Human"
          },
            {
              "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
              "name": "Howl Jenkins Pendragon",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
              "gender": "Male",
              "age": "27",
              "eye_color": "Bright blue",
              "hair_color": "Bright blue",
              "specie": "Wizard"
            },
            {
              "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
              "name": "Sophie Hatter",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
              "gender": "Female",
              "age": "18",
              "eye_color": "Brown",
              "hair_color": "White",
              "specie": "Human"
            }, 
                      ];
expect (filtroPorEdad(personas,"Edad")).toEqual(
  [
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
  },
  {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
  },
  {
    "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
    "name": "Howl Jenkins Pendragon",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
    "gender": "Male",
    "age": "27",
    "eye_color": "Bright blue",
    "hair_color": "Bright blue",
    "specie": "Wizard"
  },
  {
    "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
    "name": "Sophie Hatter",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
    "gender": "Female",
    "age": "18",
    "eye_color": "Brown",
    "hair_color": "White",
    "specie": "Human"
  },
]),
expect(filtroPorEdad(personas,"Niño")).toEqual(
  [
  {
"id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
  },
  {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
  },
{
    "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
    "name": "Sophie Hatter",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
    "gender": "Female",
    "age": "18",
    "eye_color": "Brown",
    "hair_color": "White",
    "specie": "Human"
  },
]),
expect(filtroPorEdad(personas,"Adulto")).toEqual(
  [
  {
    "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
    "name": "Howl Jenkins Pendragon",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
    "gender": "Male",
    "age": "27",
    "eye_color": "Bright blue",
    "hair_color": "Bright blue",
    "specie": "Wizard"
  },
]),
expect(filtroPorEdad(personas,"Anciano")).toEqual(
  []);
})

