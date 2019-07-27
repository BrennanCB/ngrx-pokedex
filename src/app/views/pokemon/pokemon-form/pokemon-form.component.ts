import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonFormComponent implements OnInit, OnChanges {

  public pokemonForm: FormGroup;

  @Input() public pokemon: IPokemon = {} as IPokemon;
  @Output() public add: EventEmitter<IPokemon> = new EventEmitter();
  @Output() public update: EventEmitter<IPokemon> = new EventEmitter();

  public photos = [
    {
      id: 1,
      name: 'bulbasaur'
    },
    {
      id: 2,
      name: 'ivysaur'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  private initForm(pokemon: Partial<IPokemon> = {}) {
    this.pokemonForm = this.formBuilder.group({
      name: [pokemon.name, Validators.required],
      description: [pokemon.description, Validators.required],
      height: [pokemon.height, Validators.required],
      weight: [pokemon.weight, Validators.required],
      photo: [pokemon.photo, Validators.required]
    });
  }

  public addPokemon() {
    const pokemon: IPokemon = {...this.pokemonForm.value};
    this.add.emit(pokemon);
    this.initForm();
  }

  public updatePokemon() {
    const pokemon = {
      ...this.pokemon,
      ...this.pokemonForm.value
    };
    this.update.emit(pokemon);
    this.initForm();
  }

  public ngOnInit() {
    this.initForm(this.pokemon);
  }

  public ngOnChanges() {
    this.initForm(this.pokemon);
  }

}
