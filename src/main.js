// Importa los datos de Pokémon desde el archivo "pokemon.js"
import data from "./data/pokemon/pokemon.js";
import { renderItems } from "./view.js";
import { filterBy,ordenarPokemon } from './dataFunctions.js';

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

const statsButton = document.getElementById('stats-button');
statsButton.addEventListener('click', () => {

  function findAllSpecialAttacks(pokemon) {
    return pokemon['special-attack'].map(attack => ({
      attack: attack.name,
      power: parseInt(attack['base-damage'])
    }));
  }
  
  const allSpecialAttacks = data.pokemon.flatMap(pokemon => findAllSpecialAttacks(pokemon));
  
  // Utiliza reduce() para encontrar los 15 ataques especiales más poderosos sin duplicados
  const top15SpecialAttacks = allSpecialAttacks.reduce((acc, attack) => {
    const existingAttack = acc.find(item => item.attack === attack.attack);
    if (!existingAttack) {
      acc.push(attack);
    } else if (attack.power > existingAttack.power) {
      existingAttack.power = attack.power;
      existingAttack.pokemon = attack.pokemon;
    }
    return acc;
  }, []).sort((a, b) => b.power - a.power).slice(0, 15);
  
  // Imprime la lista de los 15 ataques especiales más poderosos sin duplicados
  console.log(top15SpecialAttacks);
})