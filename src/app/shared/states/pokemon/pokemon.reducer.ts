import { PokemonActions, PokemonActionTypes } from '@state/pokemon/pokemon.action';
import { IPokemonState, pokemonAdapter } from '@state/pokemon/pokemon.adapter';

export function pokemonInitialState(): IPokemonState {
  return pokemonAdapter.getInitialState();
}

function arrayToObject(array) {
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

export function pokemonReducer(
  state: IPokemonState = pokemonInitialState(),
  action: PokemonActions
): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.LOAD_POKEMONS_SUCCESS:
      return pokemonAdapter.addAll(action.payload, state);

    case PokemonActionTypes.ADD_SUCCESS:
      return pokemonAdapter.addOne(action.pokemon, state);

    case PokemonActionTypes.DELETE_SUCCESS:
      return pokemonAdapter.removeOne(action.pokemon, state);

    case PokemonActionTypes.UPDATE_SUCCESS:
      const {id} = action.pokemon;

      return pokemonAdapter.updateOne({
        id,
        changes: action.pokemon
      }, state);

    default:
      return state;
  }
}
