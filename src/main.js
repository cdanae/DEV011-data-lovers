// Importa los datos de Pokémon desde el archivo "pokemon.js"
import pokemon from "./data/pokemon/pokemon.js";
import { renderItems } from "./view.js";
import { filterBy,ordenarPokemon } from './dataFunctions.js';

renderItems(pokemon);

const filtrarButton = document.getElementById('filtrar-button');
const filtrarOptions = document.getElementById('filtrar-options');
const selectType = document.getElementById('tipo');
const selectRegion = document.getElementById('region');

filtrarButton.addEventListener('click', () => {
  filtrarOptions.classList.toggle('mostrar');
});

selectRegion.addEventListener('change', () => {
  const selectedRegionOption = selectRegion.value;
  const pokemonFilter = filterBy(pokemon.pokemon, 'region', selectedRegionOption);

  renderItems({ pokemon: pokemonFilter });
});

selectType.addEventListener('change', () => {
  const selectedTypeOption = selectType.value;
  const pokemonFilter = filterBy(pokemon.pokemon, 'tipo', selectedTypeOption);

  renderItems({ pokemon: pokemonFilter });
});

renderItems(pokemon);

const ordenarButton = document.getElementById('ordenar-button');
const ordenarOptions = document.getElementById('ordenar-options');

ordenarButton.addEventListener('click', () => {
  ordenarOptions.classList.toggle('mostrar');
});

ordenarOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedOption = event.target.getAttribute('data-orden');
    const [property, order] = selectedOption.split('-');

    const sortedPokemon = (ordenarPokemon(pokemon.pokemon, property, order));
    renderItems({ pokemon: sortedPokemon });
    ordenarOptions.classList.remove('mostrar');
  }
});