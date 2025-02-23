import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { NotfoundPage } from './pages/notfound/notfound.page';

export const routes: Routes = [
  { path: 'main', component: MainPage },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: NotfoundPage }
];
