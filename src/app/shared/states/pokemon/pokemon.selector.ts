import { createFeatureSelector } from '@ngrx/store';
import { IPokemonState, pokemonAdapter } from '@state/pokemon/pokemon.adapter';

export const selectPokemonState = createFeatureSelector<IPokemonState>(
  'pokemon'
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = pokemonAdapter.getSelectors(selectPokemonState);
