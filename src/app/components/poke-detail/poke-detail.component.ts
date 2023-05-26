import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent {
  loading = true;
  pokemon: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router){}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonByName(name!).then(response => {
      this.pokemon = response;
      this.loading = false;
    }).catch(err => {
      this.router.navigate(['error'])
    });
  }
}
