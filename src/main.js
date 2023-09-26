// Importa los datos de Pokémon desde el archivo "pokemon.js"
import data from "./data/pokemon/pokemon.js";
import { renderItems } from "./view.js";
import { filterBy,ordenarPokemon, computeStats } from './dataFunctions.js';

const root = document.querySelector('#root')
const dataPokemon = data.pokemon;
let isDataFiltered = false; //rastrea si la data esta filtrada
let pokemonFilter = [];

root.appendChild(renderItems(dataPokemon));

const filtrarButton = document.getElementById('filtrar-button');
const filtrarOptions = document.getElementById('filtrar-options');
const selectType = document.getElementById('tipo');
const selectRegion = document.getElementById('region');
const clearButton = document.getElementById('clear-button');

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

const statsButton = document.getElementById('stats-button');
statsButton.addEventListener('click', () => {

  const main = document.querySelector('main')
  const statsContainer = `
    <h2>Ataques especiales más poderosos</h2>
    <table>
      <thead class= "estilos-tabla">
        <tr>
          <th>Ataque</th>
          <th>Daño</th>
        </tr>
      </thead>
      <tbody class= "estilos-tabla">
        ${computeStats(dataPokemon).map((attack) => `
          <tr>
              <td>${attack.attack}</td>
              <td>${attack.damage}</td>
          </tr>
      `).join('')}
      </tbody>
    </table>
  `
  main.innerHTML = statsContainer
  
})
const tiposDePokemon = { fire: "🔥",
water: "💧",
grass: "🌿",
electric: "⚡",
ground: "🌍",
flying: "🦅",
poison: "☠️",
psychic: "🔮",
fighting: "🥊",
ice: "❄️",
rock: "🪨",
bug: "🐞",
dragon: "🐉",
ghost: "👻",
steel: "🔩",
normal: "⚪",
dark: "🌑",
fairy: "🧚‍♀️"
}

clearButton.addEventListener('click', () => {
  console.log('Botón de limpieza clicado');
  isDataFiltered = false;
  pokemonFilter = [];
  root.innerHTML = ''; // Limpia el contenido actual
  root.appendChild(renderItems(dataPokemon)); // Vuelve a mostrar todos los Pokémon
});