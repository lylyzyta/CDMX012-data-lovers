import {topCinco, imprimePersonajes, personajesfilter, caracteristicafilter, specieFilter, edadFilter} from '../src/data.js';

//Test Función topCinco
describe('topCinco', () => {
  it('is a function', () => {
    expect(typeof topCinco).toBe('function');
  });

  it('returns `topCinco`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

//Test Función imprimePersonajes
describe('imprimePersonajes', () => {
  it('is a function', () => {
    expect(typeof imprimePersonajes).toBe('function');
  });

  it('returns `imprime todos los personajes`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

//Test Función personajesfilter
describe('personajesfilter', () => {
  it('is a function', () => {
    expect(typeof personajesfilter).toBe('function');
  });

  it('returns `personajes por película`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

//Test Función caracteristicafilter
describe('caracteristicafilter', () => {
  it('is a function', () => {
    expect(typeof caracteristicafilter).toBe('function');
  });

  it('returns `género de personaje`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

//Test Función specieFilter
describe('specieFilter', () => {
  it('is a function', () => {
    expect(typeof specieFilter).toBe('function');
  });

  it('returns `Clasifica Especie`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


//Test Función edadFilter
describe('edadFilter', () => {
  it('is a function', () => {
    expect(typeof edadFilter).toBe('function');
  });

  it('returns `Clasifica Edad`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

