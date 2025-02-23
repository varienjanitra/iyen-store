import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: WritableSignal<string> = signal('');

  constructor() { }

  get searchString() {
    return this.searchQuery;
  }

  searchItem(searchQuery: string) {
    this.searchQuery.set(searchQuery);
  }
}
