import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent {

  @Input() public pokemons: IPokemon[] = [];
  @Output() public delete: EventEmitter<IPokemon> = new EventEmitter();
  @Output() public select: EventEmitter<IPokemon> = new EventEmitter();

  constructor() { }

  public deletePokemon(pokemon: IPokemon) {
    this.delete.emit(pokemon);
  }
  public selectPokemon(pokemon: IPokemon) {
    this.select.emit(pokemon);
  }

  trackByFn(_, item) {
    return item.id;
  }
}
