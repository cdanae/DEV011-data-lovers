export const renderItems = (data) => {
  // Selecciona el contenedor con el id "listaPokemon"
  const listaPokemon = document.getElementById('listaPokemon');
  listaPokemon.innerHTML = '';

  const tiposDePokemon = { 
    fire: "🔥",
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
    normal: "🔘",
    dark: "🌑",
    fairy: "🧚‍♀️"
  }

  function obtenerTipo(arr) {
    let emoji = ''
    arr.forEach(e => {
      emoji = emoji + ' ' + tiposDePokemon[e]
    })
    return emoji
  }



  data.forEach(pokemon => {
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon');
    li.setAttribute('class', 'li-card');

    const cartaPokemon = `
      <dl itemscope itemtype="pokemon" class="tarjeta">
        <dd itemprop="name">${pokemon.name}</dd>
        <dd itemprop="image">
          <img src="${pokemon.img}" alt="${pokemon.name}">
        </dd>    
        <dd itemprop="num">${pokemon.num}</dd>
        <dd itemprop="tipo">${obtenerTipo(pokemon.type)}</dd>
        <div class="caracteristicas">
          <div class="resistant">
              <dt>Resistant</dt>
              <ul>
                  ${pokemon.resistant.map(resistant => `<li>${resistant}</li>`).join('')}
              </ul>
          </div>
          <div class="weaknesses">
              <dt>Weaknesses</dt>
              <ul>
                  ${pokemon.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
              </ul>
          </div>
        </div>
      </dl>
      <button class="btn-masInfo">Ver más...</button>
      `;
  
    li.innerHTML = cartaPokemon;
      
    const btnMasInfo = li.querySelector('.btn-masInfo');
    btnMasInfo.addEventListener('click', () => {
      console.log('Botón de esta tarjeta clickeado:', pokemon.name);
    })
    listaPokemon.appendChild(li);


  });
  return listaPokemon;
}
  
