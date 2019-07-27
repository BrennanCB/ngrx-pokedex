import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PokemonService } from '@services/pokemon.service';
import {
  AddFailed,
  AddSuccess,
  DeleteFailed,
  DeleteSuccess,
  LoadPokemonFailed,
  LoadPokemonSuccess,
  PokemonActionTypes,
  UpdateFailed,
  UpdateSuccess
} from '@state/pokemon/pokemon.action';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class PokemonEffects {
  private POKEMON_ACTIONS_SUCCESS = [
    PokemonActionTypes.ADD_SUCCESS,
    PokemonActionTypes.UPDATE_SUCCESS,
    PokemonActionTypes.DELETE_SUCCESS,
    PokemonActionTypes.LOAD_POKEMONS_SUCCESS
  ];

  private POKEMON_ACTIONS_FAILED = [
    PokemonActionTypes.ADD_FAILED,
    PokemonActionTypes.UPDATE_FAILED,
    PokemonActionTypes.DELETE_FAILED,
    PokemonActionTypes.LOAD_POKEMONS_FAILED
  ];

  @Effect()
  public loadAllPokemon$: Observable<any> = this.actions$.pipe(
    ofType(PokemonActionTypes.LOAD_POKEMONS),
    switchMap(() =>
      this.pokemonService.getAll().pipe(
        map(pokemons => new LoadPokemonSuccess(pokemons)),
        catchError(error => of(new LoadPokemonFailed(error)))
      )
    )
  );

  @Effect()
  public addPokemon$: Observable<any> = this.actions$.pipe(
    ofType(PokemonActionTypes.ADD),
    switchMap((action: {pokemon: IPokemon}) =>
      this.pokemonService.add(action.pokemon).pipe(
        map((pokemon: IPokemon) => new AddSuccess(pokemon)),
        catchError(error => of(new AddFailed(error)))
      )
    )
  );

  @Effect()
  public deletePokemon$: Observable<any> = this.actions$.pipe(
    ofType(PokemonActionTypes.DELETE),
    switchMap(({id}) =>
      this.pokemonService.delete(id).pipe(
        map(() => new DeleteSuccess(id)),
        catchError(error => of(new DeleteFailed(error)))
      )
    )
  );

  @Effect()
  public updatePokemon$: Observable<any> = this.actions$.pipe(
    ofType(PokemonActionTypes.UPDATE),
    switchMap(({pokemon}) =>
      this.pokemonService.update(pokemon).pipe(
        map(() => new UpdateSuccess(pokemon)),
        catchError(error => of(new UpdateFailed(error)))
      )
    )
  );

  @Effect({dispatch: false})
  public successNotification$ = this.actions$.pipe(
    ofType(...this.POKEMON_ACTIONS_SUCCESS),
    tap(() =>
      this.snackBar.open('SUCCESS', 'Operation success', {
        duration: 2000
      })
    )
  );

  @Effect({dispatch: false})
  public failedNotification$ = this.actions$.pipe(
    ofType(...this.POKEMON_ACTIONS_FAILED),
    tap(() =>
      this.snackBar.open('FAILED', 'Operation failed', {
        duration: 2000
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    public snackBar: MatSnackBar
  ) { }
}
