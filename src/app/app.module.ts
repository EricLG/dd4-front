import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes  } from  '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagicItemsComponent } from './items/magic/magic-items.component';

export  const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'magic-items',   component:  MagicItemsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagicItemsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
