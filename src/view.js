export const renderItems = (pokemonData) => {
  // Utiliza la función map() para generar una representación HTML de cada Pokémon
  const pokemonCardsHTML = pokemonData.map((pokemon) => {
    return `
      <li itemscope itemtype="http://schema.org/Pokemon">
        <div class="tarjeta">
          <div class="front card">
            <img class="imagenPokemon" src="${pokemon.image}" itemprop="image" alt="${pokemon.name}">
            <p>
              <span itemprop="number">${pokemon.number}</span>
              <br>
              <span itemprop="name">${pokemon.name}</span>
            </p>
          </div>
          <div class="back card">
            <p>
              "Ataque:"
              <br>
              <span itemprop="attack">${pokemon.attack}</span>
              <br>
              "Peso:"
              <br>
              <span itemprop="weight">${pokemon.weight}</span>
            </p>
          </div>
        </div>
      </li>
    `;
  }).join(''); // Utiliza join('') para convertir el array de HTML en una cadena

  // Devuelve la representación HTML de todas las cartas de Pokémon
  return `<ul id="listaPokemon">${pokemonCardsHTML}</ul>`;
};

