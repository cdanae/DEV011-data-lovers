export const renderItems = (data) => {

  // Selecciona el contenedor con el id "listaPokemon"
  const listaPokemon = document.getElementById('listaPokemon');
  listaPokemon.innerHTML = '';

  data.pokemon.forEach(pokemon => {
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon');
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
  
      
    listaPokemon.appendChild(li);
  });
}
  
