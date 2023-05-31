import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from 'src/app/models/search-sort';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(
    private pokemonService: PokemonService,
    private paginationService: PaginationService,
    private router: Router
  ) {}

  pagination: any;
  list: any;
  filterableList: any;
  offset = 0;
  limit = 50;
  loading = true;
  searchText: string;
  sort: Sort = Sort.Default;

  ngOnInit() {
    this.getPokemonList(this.offset, this.limit);
  }

  getPokemonList(offset: number, limit: number) {
    this.pokemonService.getPokemonList(offset, limit).then((response) => {
      this.pagination = this.paginationService.getPagination(
        response.count,
        limit
      );
      this.list = response.results;
      this.filterableList = this.list;
      this.loading = false;
    });
  }

  changePage(page: number) {
    this.searchText = '';
    this.pagination = this.paginationService.getPagination(
      this.pagination.pages,
      this.limit,
      page
    );
    this.getPokemonList(this.pagination.offset, this.limit);
  }

  navigateToDetail(name: string) {
    this.router.navigate([`/pokemon/${name}`]);
  }

  searchOnList() {
    this.filterableList = this.list.filter((pokemon: any) =>
      pokemon.name.includes(this.searchText.toLowerCase())
    );
  }

  sortList() {
    this.filterableList = this.list.sort((n1: any, n2: any) => {
      if (n1.name < n2.name) {
        this.sort = Sort.DESC;
        return -1;
      }
      if (n1.name > n2.name) {
        this.sort = Sort.ASC;
        return 1;
      }
      return 0;
    });
  }
}
