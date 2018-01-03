import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from  '@angular/router';
import { APP_BASE_HREF } from  '@angular/common';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagicItemsComponent } from './magic-items/magic-items.component';
import { MagicItemDetailComponent } from './magic-item-detail/magic-item-detail.component';
import { ItemLevelsComponent } from './item-levels/item-levels.component';
import { RacesComponent } from './races/races.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

// Services
import { MagicItemsService } from './services/magic-items.service';
import { RacesService } from './services/races.service';

export  const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'magic-items',   component:  MagicItemsComponent },
    { path: 'races',   component:  RacesComponent },
    { path: 'races/:id',   component:  RaceDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagicItemsComponent,
    MagicItemDetailComponent,
    ItemLevelsComponent,
    RacesComponent,
    RaceDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MagicItemsService,
    RacesService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
