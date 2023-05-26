import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pagesCount = 0;
  @Output() pageChange = new EventEmitter<number>();
  numbers: number[];
  currentPage = 1;

  constructor() {
    this.numbers = []
  }

  ngOnInit() {
    this.numbers = Array(this.pagesCount).fill(0).map((x,i)=>i+1);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

}
