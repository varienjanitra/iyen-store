import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'istore-search',
  imports: [],
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss'
})
export class SearchPage {
  private searchService = inject(SearchService);
  searchString = this.searchService.searchString;
}
