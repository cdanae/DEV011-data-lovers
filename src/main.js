// Importa los datos de Pokémon desde el archivo "pokemon.js"
import data from "./data/pokemon/pokemon.js";
import { renderItems } from "./view.js";
import { filterBy,ordenarPokemon } from './dataFunctions.js';

console.log('ver pok: ', data);
const root = document.querySelector('#root')
root.appendChild(renderItems(data.pokemon));

const filtrarButton = document.getElementById('filtrar-button');
const filtrarOptions = document.getElementById('filtrar-options');
const selectType = document.getElementById('tipo');
const selectRegion = document.getElementById('region');

filtrarButton.addEventListener('click', () => {
  filtrarOptions.classList.toggle('mostrar');
});

selectRegion.addEventListener('change', () => {
  const selectedRegionOption = selectRegion.value;
  const pokemonFilter = filterBy(data, 'region', selectedRegionOption);

  renderItems(pokemonFilter);
});

selectType.addEventListener('change', () => {
  const selectedTypeOption = selectType.value;
  const pokemonFilter = filterBy(data, 'tipo', selectedTypeOption);

  renderItems(pokemonFilter );
});

renderItems(data);

const ordenarButton = document.getElementById('ordenar-button');
const ordenarOptions = document.getElementById('ordenar-options');

ordenarButton.addEventListener('click', () => {
  ordenarOptions.classList.toggle('mostrar');
});

ordenarOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedOption = event.target.getAttribute('data-orden');
    const [property, order] = selectedOption.split('-');

    const sortedPokemon = (ordenarPokemon(data, property, order));
    renderItems( sortedPokemon );
    ordenarOptions.classList.remove('mostrar');
  }
});