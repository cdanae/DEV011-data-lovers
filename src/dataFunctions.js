export const filterBy = (data, filterBy, value) => {
  let pokemonFilter = [];
console.log(data);
  switch (filterBy) {
  case 'region':
    pokemonFilter = data.filter(
      (data) => data.generation.name === value
    );
    break;

  case 'tipo':
    pokemonFilter = data.filter((data) => {
      const findType = data.type.find((e) => e === value);
      return findType;
    });
    break;

    
  default:
    break;
  }

  return pokemonFilter;
};


export const ordenarPokemon = (data,property, order) => {

  const sortedPokemon = [...data];

  const compareFunction = (a, b) => {
    if (order === 'asc') {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  };

  sortedPokemon.sort(compareFunction);

  //renderItems({ pokemon: sortedPokemon });
  return sortedPokemon;
};

