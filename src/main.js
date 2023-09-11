/// Importa los datos de Pokémon desde el archivo "pokemon.js"
import pokemon from "./data/pokemon/pokemon.js";
console.log(pokemon);
// Función para construir y agregar las cartas de Pokémon al contenedor
function construirCartas(data) {
  // Selecciona el contenedor con el id "listaPokemon"
  const listaPokemon = document.getElementById('listaPokemon');

  // Itera sobre los datos de Pokémon
  data.pokemon.forEach(pokemon => {
    // Crea un elemento <li> para cada Pokémon
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon');

    // Crea la estructura de la tarjeta del Pokémon aquí
    const cartaPokemon = `
    <div class="tarjeta" itemscope itemtype="pokemon">
        <dl>
            <dd itemprop="name">${pokemon.name}</dd>
            <dd itemprop="image">
            <img src="${pokemon.img}" alt="${pokemon.name}">
            </dd>
        </dl>
    </div>
    `;

    li.innerHTML = cartaPokemon;

    // Agrega el elemento <li> al contenedor <ul>
    listaPokemon.appendChild(li);
  });
}

// Llama a la función para construir las cartas de Pokémon pasando los datos importados
construirCartas(pokemon);