import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { IAppStore } from '@abstractions/interfaces/store.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Delete, LoadPokemon, selectAll } from '@state/pokemon';
import { Observable } from 'rxjs';
import { Add, Update } from 'src/app/shared/states/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent {
  public pokemon: IPokemon = {} as IPokemon;

  public pokemons$: Observable<IPokemon[]> = this.store$.select(
    selectAll
  );

  constructor(private store$: Store<IAppStore>) {
    this.store$.dispatch(new LoadPokemon());
  }
  public onAdd(pokemon: IPokemon) {
    this.store$.dispatch(new Add(pokemon));
  }

  public onDelete(pokemon: IPokemon) {
    this.store$.dispatch(new Delete(pokemon.id));
  }

  public onSelect(pokemon: IPokemon) {
    this.pokemon = pokemon;
  }

  public onUpdate(pokemon: IPokemon) {
    this.store$.dispatch(new Update(pokemon));
  }
}
