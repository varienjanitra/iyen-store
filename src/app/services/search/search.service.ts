import { Injectable, signal, WritableSignal } from '@angular/core';
import { Item } from '../../data/item';
import { itemListTest } from '../../data/itemListTest';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private itemDb: Item[] = [];
  private searchQuery: WritableSignal<string> = signal('');
  private searchResult: WritableSignal<Item[]> = signal([]);

  constructor() {
    // For test purpose, while the front-end has not connected to the backend
    this.itemDb = itemListTest;
  }

  get getSearchString() {
    return this.searchQuery;
  }

  get getSearchResult() {
    return this.searchResult;
  }

  setSearchQuery(searchQuery: string) {
    this.searchQuery.set(searchQuery);
    this.searchItem();
  }

  searchItem() {
    if(this.searchQuery() == '**showall**') {
      this.searchResult.set(this.itemDb);
    } else {
      let filteredItem: Item[] = this.itemDb.filter(
        item => item.name
          .toLowerCase()
          .includes(this.searchQuery().toLowerCase())
        );
      this.searchResult.set(filteredItem);
    }
  }
}
