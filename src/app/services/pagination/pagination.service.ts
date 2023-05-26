import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPagination(itemSize: number, pageSize = 50, currentPage = 1) {
    return {
      pages: Math.round(itemSize / pageSize),
      offset: (currentPage - 1) * pageSize
    }
  }
}
