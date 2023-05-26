import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList(offset: number, limit: number) {
    const api = new PokemonClient();
    return api.listPokemons(offset, limit);
  }

  getPokemonByName(name: string) {
    const api = new PokemonClient();
    return api.getPokemonByName(name);
  }
}
