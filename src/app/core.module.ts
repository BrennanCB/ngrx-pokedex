import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonService } from '@services/pokemon.service';
import { PokemonEffects } from '@state/pokemon';
import { reducers } from '@state/root.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PokemonEffects])
  ],
  providers: [PokemonService]
})
export class CoreModule {}
