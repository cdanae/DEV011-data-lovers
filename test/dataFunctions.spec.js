import { filterBy, ordenarPokemon, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

const POKEMON_REGION_KANTO =  [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "grass",
    "poison"
  ],
  "special-attack": [
    {
      "name": "sludge bomb",
      "type": "poison",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.3"
    },
    {
      "name": "seed bomb",
      "type": "grass",
      "base-damage": "55",
      "energy": "-33",
      "move-duration-seg": "2.1"
    },
    {
      "name": "power whip",
      "type": "grass",
      "base-damage": "90",
      "energy": "-50",
      "move-duration-seg": "2.6"
    }
  ]
}];
const POKEMON_TYPE_STEEL = [
  {
    "num": "227",
    "name": "skarmory",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "steel",
      "flying"
    ],
    "special-attack": [
      {
        "name": "brave bird",
        "type": "flying",
        "base-damage": "90",
        "energy": "-100",
        "move-duration-seg": "2"
      },
      {
        "name": "sky attack",
        "type": "flying",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      },
      {
        "name": "flash cannon",
        "type": "steel",
        "base-damage": "100",
        "energy": "-100",
        "move-duration-seg": "2.7"
      }
    ]
  }
] 
const POKEMON_NUM_DESC = [
  {
    "num": "227",
    "name": "skarmory",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "steel",
      "flying"
    ],
    "special-attack": [
      {
        "name": "brave bird",
        "type": "flying",
        "base-damage": "90",
        "energy": "-100",
        "move-duration-seg": "2"
      },
      {
        "name": "sky attack",
        "type": "flying",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      },
      {
        "name": "flash cannon",
        "type": "steel",
        "base-damage": "100",
        "energy": "-100",
        "move-duration-seg": "2.7"
      }
    ]
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "seed bomb",
        "type": "grass",
        "base-damage": "55",
        "energy": "-33",
        "move-duration-seg": "2.1"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ]
  }

];
const POKEMON_NAME_DESC = [  
  {
    "num": "227",
    "name": "skarmory",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "steel",
      "flying"
    ],
    "special-attack": [
      {
        "name": "brave bird",
        "type": "flying",
        "base-damage": "90",
        "energy": "-100",
        "move-duration-seg": "2"
      },
      {
        "name": "sky attack",
        "type": "flying",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      },
      {
        "name": "flash cannon",
        "type": "steel",
        "base-damage": "100",
        "energy": "-100",
        "move-duration-seg": "2.7"
      }
    ]
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "seed bomb",
        "type": "grass",
        "base-damage": "55",
        "energy": "-33",
        "move-duration-seg": "2.1"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ]
  }
]
const ATAQUES_ESPECIALES_PODEROSOS = [
  {attack: 'flash cannon', damage: 100}, 
  {attack: 'power whip', damage: 90}, 
  {attack: 'brave bird', damage: 90},
  {attack: 'sludge bomb', damage: 80}, 
  {attack: 'sky attack', damage: 70}, 
  {attack: 'seed bomb', damage: 55},
]

describe('filterBy', () => {

  it('Debe filtrar la data por region kanto', () => {
    const filterResult = filterBy(fakeData, 'region', 'kanto')
    expect(filterResult).toEqual(POKEMON_REGION_KANTO);
  });
  it('Debe filtrar por tipo de pokemon de acero(steel)', () => {
    const filterResult = filterBy(fakeData, 'type', 'steel')
    expect(filterResult).toEqual(POKEMON_TYPE_STEEL);
  })
});

describe('ordenarPokemon', () => {
  it('Debe ordenar la data por numero descendiente', () => {
    const orderResult = ordenarPokemon(fakeData, 'num', 'desc')
    expect(orderResult).toEqual(POKEMON_NUM_DESC)
  })

  it('Debe ordenar la data por nombre descendiente', () => {
    const orderResult = ordenarPokemon(fakeData, 'name', 'desc')
    expect(orderResult).toEqual(POKEMON_NAME_DESC)
  })
})

describe('computeStats', () => {

  it('Debe mostrar un array con los ataques mas poderosos', () => {
    const statsResult = computeStats(fakeData)
    expect(statsResult).toEqual(ATAQUES_ESPECIALES_PODEROSOS);
  });
});

/* describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */