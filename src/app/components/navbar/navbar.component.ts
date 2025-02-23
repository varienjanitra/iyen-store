import { Component, EventEmitter, input, Input, Output, output, ViewEncapsulation } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'istore-navbar',
  imports: [
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

  onSideNavButtonClick() {
    this.isSideNavOpenedChange.emit(!this.isSideNavOpened);
  }
}
