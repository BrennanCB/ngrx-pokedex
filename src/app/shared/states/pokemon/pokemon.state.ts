import { IPokemon } from '@abstractions/interfaces/pokemon.interface';

export interface IPokemonState {
  ids: number[];
  entities: {[key: string]: IPokemon};
}
