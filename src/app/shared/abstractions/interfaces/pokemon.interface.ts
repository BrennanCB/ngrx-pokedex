import { PokemonType } from '../types/pokemon.type';

export interface IPokemon {
  id: number;
  photo: number;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
  description: string;
}
