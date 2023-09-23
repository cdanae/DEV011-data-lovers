// Importa los datos de Pokémon desde el archivo "pokemon.js"
import data from "./data/pokemon/pokemon.js";
import { renderItems } from "./view.js";
import { filterBy,ordenarPokemon } from './dataFunctions.js';

const root = document.querySelector('#root')
const dataPokemon = data.pokemon;
let isDataFiltered = false; //rastrea si la data esta filtrada
let pokemonFilter = [];

root.appendChild(renderItems(dataPokemon));

const filtrarButton = document.getElementById('filtrar-button');
const filtrarOptions = document.getElementById('filtrar-options');
const selectType = document.getElementById('tipo');
const selectRegion = document.getElementById('region');

filtrarButton.addEventListener('click', () => {
  filtrarOptions.classList.toggle('mostrar');
});

selectRegion.addEventListener('change', () => {
  const selectedRegionOption = selectRegion.value;
  pokemonFilter = filterBy(dataPokemon, 'region', selectedRegionOption);
  isDataFiltered = true; // Marcar que la data está filtrada
  renderItems(pokemonFilter);
  filtrarOptions.classList.remove('mostrar');
});

selectType.addEventListener('change', () => {
  const selectedTypeOption = selectType.value;
  pokemonFilter = filterBy(dataPokemon, 'tipo', selectedTypeOption);
  isDataFiltered = true; 
  renderItems(pokemonFilter );
  filtrarOptions.classList.remove('mostrar');
});



const ordenarButton = document.getElementById('ordenar-button');
const ordenarOptions = document.getElementById('ordenar-options');

ordenarButton.addEventListener('click', () => {
  ordenarOptions.classList.toggle('mostrar');

//Verificar si la data esta filtrada y proceder a ordenarla
  if (isDataFiltered) {
    ordenarOptions.addEventListener('click', (event) => {
     if (event.target.tagName === 'BUTTON') {
      const selectedOption = event.target.getAttribute('data-orden');
      const [property, order] = selectedOption.split('-');

      const sortedPokemon = ordenarPokemon(pokemonFilter, property, order);
      renderItems(sortedPokemon);
      ordenarOptions.classList.remove('mostrar');
     }   
  });
  } else {
    ordenarOptions.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const selectedOption = event.target.getAttribute('data-orden');
        const [property, order] = selectedOption.split ('-');

        const sortedPokemon = ordenarPokemon(dataPokemon, property, order);
        renderItems(sortedPokemon);
        ordenarOptions.classList.remove('mostrar');
      }
    });
   } 
  });

