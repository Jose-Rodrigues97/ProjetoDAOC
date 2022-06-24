import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards-component/cards.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { QuemsomosComponent } from './quemsomos-component/quemsomos.component';
import { PorquedoarComponent } from './porquedoar-component/porquedoar.component';
import { ContatosComponent } from './contatos-component/contatos-component.component';
import { CadastrodoadorComponentComponent } from './cadastrodoador-component/cadastrodoador-component.component';
import { CadastronecessitadoComponentComponent } from './cadastronecessitado-component/cadastronecessitado-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarouselComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    QuemsomosComponent,
    PorquedoarComponent,
    ContatosComponent,
    CadastrodoadorComponentComponent,
    CadastronecessitadoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
