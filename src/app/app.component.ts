import { Component, inject, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iyen-store';
  private matIconRegistry = inject(MatIconRegistry);
  isSideNavOpened: boolean = false;

  ngOnInit() {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
