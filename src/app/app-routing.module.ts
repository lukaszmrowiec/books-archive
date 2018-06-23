import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ExploreComponent } from './explore/explore.component';
import { SearchComponent} from './search/search.component';
import { AddComponent} from './add/add.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
