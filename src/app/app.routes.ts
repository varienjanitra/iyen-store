import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { NotfoundPage } from './pages/notfound/notfound.page';
import { SearchPage } from './pages/search/search.page';

export const routes: Routes = [
  { path: 'main', component: MainPage },
  { path: 'search', component: SearchPage },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: NotfoundPage }
];
