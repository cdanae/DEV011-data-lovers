
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
    li.setAttribute('itemtype', 'http://schema.org/Pokemon');

    // Crea la estructura de la tarjeta del Pokémon aquí
    const cartaPokemon = `
      <div class="tarjeta">
        <!-- Contenido de la tarjeta aquí -->
      </div>
    `;

    li.innerHTML = cartaPokemon;

    // Agrega el elemento <li> al contenedor <ul>
    listaPokemon.appendChild(li);
  });
}

// Llama a la función para construir las cartas de Pokémon pasando los datos importados
construirCartas(pokemon);