import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon.component';

const COMPONENTS = [
  PokemonListComponent,
  PokemonComponent,
  PokemonFormComponent
];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class PokemonModule {}
