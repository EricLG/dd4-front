import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MagicItemsComponent } from './magic-items/magic-items.component';
import { RacesComponent } from './races/races.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'magic-items',   component:  MagicItemsComponent },
    { path: 'races',   component:  RacesComponent },
    { path: 'races/:id',   component:  RaceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
