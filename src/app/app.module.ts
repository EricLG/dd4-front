import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from  '@angular/router';
import { APP_BASE_HREF } from  '@angular/common';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagicItemsComponent } from './items/magic/magic-items.component';
import { MagicItemDetailComponent } from './items/magic-item-detail/magic-item-detail.component';

// Services
import { MagicItemsService } from './services/magic-items.service';

export  const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'magic-items',   component:  MagicItemsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagicItemsComponent,
    MagicItemDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MagicItemsService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
