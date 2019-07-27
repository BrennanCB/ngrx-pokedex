import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const pokemonAdapter = createEntityAdapter<IPokemon>();

export interface IPokemonState extends EntityState<IPokemon> {}
