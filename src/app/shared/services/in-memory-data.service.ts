import { InMemoryDbService } from 'angular-in-memory-web-api';
import { pokemons as pokemonsDB } from '../mock/pokemons';

export class InMemoryDataService implements InMemoryDbService {

  public createDb(): {} {
    const pokemons = pokemonsDB;
    return {pokemons};
  }

  public genId(): number {
    return Math.round(Math.random() * 1000000);
  }
}
