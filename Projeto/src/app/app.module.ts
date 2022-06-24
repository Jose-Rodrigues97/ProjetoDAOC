import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards-component/cards.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { PorquedoarComponent } from './porquedoar/porquedoar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarouselComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    QuemsomosComponent,
    PorquedoarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
