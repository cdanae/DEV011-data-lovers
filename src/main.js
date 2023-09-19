// Importa los datos de Pokémon desde el archivo "pokemon.js"
import pokemon from "./data/pokemon/pokemon.js";
import { filterBy } from './dataFunctions.js';


// Función para construir y agregar las cartas de Pokémon al contenedor
function construirCartas(data) {
  // Selecciona el contenedor con el id "listaPokemon"
  const listaPokemon = document.getElementById('listaPokemon');
  listaPokemon.innerHTML = ''

  // Itera sobre los datos de Pokémon
  data.pokemon.forEach(pokemon => {
    // Crea un elemento <li> para cada Pokémon
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon');

    // Crea la estructura de la tarjeta del Pokémon aquí
    const cartaPokemon = `
    <div class="tarjeta-container" itemscope itemtype="pokemon">
        <dl class="tarjeta">
            <dd itemprop="name">${pokemon.name}</dd>
            <dd itemprop="image">
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </dd>    
            <div class="caracteristicas">
            <div class="resistant">
                <p>Resistant</p>
                <ul>
                    ${pokemon.resistant.map(resistant => `<li>${resistant}</li>`).join('')}
                </ul>
            </div>
            <div class="weaknesses">
                <p>Weaknesses</p>
                <ul>
                    ${pokemon.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                </ul>
            </div>
        </div>
        </dl>
    </div>
    `;

    li.innerHTML = cartaPokemon;

    // Agrega el elemento <li> al contenedor <ul>
    listaPokemon.appendChild(li);
  });
}

const selectType = document.getElementById('tipo')
const selectRegion = document.getElementById('region')
selectRegion.addEventListener('change', () => {
  const selectedRegionOption = selectRegion.value
  const pokemonFilter = filterBy(pokemon.pokemon, 'region', selectedRegionOption)

  construirCartas({pokemon: pokemonFilter})
})

selectType.addEventListener('change', () => {
  const selectedTypeOption = selectType.value
  const pokemonFilter = filterBy(pokemon.pokemon, 'tipo', selectedTypeOption)

  construirCartas({pokemon: pokemonFilter})
})

function ordenarPokemon(property, order) {
  const sortedPokemon = [...pokemon.pokemon]; 

  
  const compareFunction = (a, b) => {
    if (order === 'asc') {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  };

  
  sortedPokemon.sort(compareFunction);

  

  construirCartas({ pokemon: sortedPokemon });
}


construirCartas(pokemon);


const ordenarButton = document.getElementById('ordenar-button');
const ordenarOptions = document.getElementById('ordenar-options');

ordenarButton.addEventListener('click', () => {
  ordenarOptions.classList.toggle('mostrar'); 
});


ordenarOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedOption = event.target.getAttribute('data-orden');
    const [property, order] = selectedOption.split('-');
    
    ordenarPokemon(property, order); 
    ordenarOptions.classList.remove('mostrar'); 
  }
});

