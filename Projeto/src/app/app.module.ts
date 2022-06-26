import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './Componentes/cards-component/cards.component';
import { CarouselComponentComponent } from './Componentes/carousel-component/carousel-component.component';
import { HeaderComponentComponent } from './Componentes/header-component/header-component.component';
import { FooterComponentComponent } from './Componentes/footer-component/footer-component.component';
import { QuemsomosComponent } from './Componentes/quemsomos-component/quemsomos.component';
import { PorquedoarComponent } from './Componentes/porquedoar-component/porquedoar.component';
import { ContatosComponent } from './Componentes/contatos-component/contatos-component.component';
import { CadastrodoadorComponentComponent } from './Componentes/cadastrodoador-component/cadastrodoador-component.component';
import { CadastronecessitadoComponentComponent } from './Componentes/cadastronecessitado-component/cadastronecessitado-component.component';
import { CadastroestabelecimentoComponentComponent } from './Componentes/cadastroestabelecimento-component/cadastroestabelecimento-component.component';
import { LoginComponentComponent } from './Componentes/login-component/login-component.component';
import { ListaparticipantesComponentComponent } from './Componentes/listaparticipantes-component/listaparticipantes-component.component';
import { ListanecessitadosComponentComponent } from './listanecessitados-component/listanecessitados-component.component';
import { ListaestabelecimentosComponentComponent } from './listaestabelecimentos-component/listaestabelecimentos-component.component';

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
    CadastronecessitadoComponentComponent,
    CadastroestabelecimentoComponentComponent,
    LoginComponentComponent,
    ListaparticipantesComponentComponent,
    ListanecessitadosComponentComponent,
    ListaestabelecimentosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
