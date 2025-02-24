import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { ItemSearchCardComponent } from "../../components/item/item-search-card/item-search-card.component";

@Component({
  selector: 'istore-search',
  imports: [ItemSearchCardComponent],
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss'
})
export class SearchPage {
  private searchService = inject(SearchService);

  searchString = this.searchService.getSearchString;
  searchResult = this.searchService.getSearchResult;
}
