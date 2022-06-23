import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards-component/cards.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarouselComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
