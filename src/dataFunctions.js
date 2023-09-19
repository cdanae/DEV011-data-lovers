export const filterBy = (data, filterBy, value) => {
  
  let pokemonFilter = []
  
  switch(filterBy) {
    case 'region': 
       pokemonFilter = data.filter(
        data => data.generation.name === value
      );
      break;

    case 'tipo': 
         pokemonFilter = data.filter(data => {
          console.log("DATA TYPE", data.type , " COMPARA CON: ", value);
          let findType = data.type.find(e => e === value)
          return findType
         });
        break;

      case 'default':
        break;
  }
  
  return pokemonFilter
  
};

export const anotherExample = () => {
  return [];
};
