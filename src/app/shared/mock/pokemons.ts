import { IPokemon } from '../abstractions/interfaces/pokemon.interface';

export const pokemons: IPokemon[] = [
  {
    id: 1,
    photo: 1,
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    description:
      'For some time after its birth, it grows by gaining nourishment from the seed on its back.'
  },
  {
    id: 2,
    photo: 2,
    name: 'ivysaur',
    types: ['grass', 'poison'],
    height: 10,
    weight: 130,
    description:
      'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.'
  }
];
