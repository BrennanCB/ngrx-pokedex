import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPokemonState } from '@state/pokemon/pokemon.state';

export const selectPokemonState = createFeatureSelector<IPokemonState>(
  'pokemon'
);

export const selectAll = createSelector(
  selectPokemonState,
  state => Object.values(state.entities)
);
