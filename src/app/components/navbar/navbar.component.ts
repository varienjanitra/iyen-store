import { Component, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'istore-navbar',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  @Input() isSideNavOpened: boolean = false;
  @Output() isSideNavOpenedChange = new EventEmitter<boolean>();

  private routerService = inject(Router);
  private searchService = inject(SearchService);

  searchString: string = '';

  onSideNavButtonClick() {
    this.isSideNavOpenedChange.emit(!this.isSideNavOpened);
  }

  onHomeButtonClick() {
    this.routerService.navigate(['main']);
  }

  onSearch() {
    console.log(this.searchString);
    this.searchService.searchItem(this.searchString);
    this.routerService.navigate(['search']);
  }
}
