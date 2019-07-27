import { IPokemon } from '@abstractions/interfaces/pokemon.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(environment.backendUrl);
  }

  public delete(id: string): Observable<IPokemon> {
    return this.http.delete<IPokemon>(`${ environment.backendUrl }/${ id }`);
  }

  public add(pokemon: IPokemon): Observable<IPokemon> {
    return this.http.post<IPokemon>(environment.backendUrl, pokemon);
  }

  public update(pokemon: Partial<IPokemon>): Observable<IPokemon> {
    return this.http.put<IPokemon>(`${ environment.backendUrl }`, pokemon);
  }
}
