import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrodoadorComponentComponent } from './Componentes/cadastrodoador-component/cadastrodoador-component.component';
import { CadastroestabelecimentoComponentComponent } from './Componentes/cadastroestabelecimento-component/cadastroestabelecimento-component.component';
import { CadastronecessitadoComponentComponent } from './Componentes/cadastronecessitado-component/cadastronecessitado-component.component';
import { CardsComponent } from './Componentes/cards-component/cards.component';
import { ContatosComponent } from './Componentes/contatos-component/contatos-component.component';
import { LoginComponentComponent } from './Componentes/login-component/login-component.component';
import { PorquedoarComponent } from './Componentes/porquedoar-component/porquedoar.component';
import { QuemsomosComponent } from './Componentes/quemsomos-component/quemsomos.component';

const routes: Routes = [
  {
    path: 'Login',
    component:LoginComponentComponent
  },
  {
    path: 'QuemSomos',
    component: QuemsomosComponent
  },
  {
    path: 'PorQueDoar',
    component: PorquedoarComponent
  },
  {
    path: 'Contato',
    component: ContatosComponent
  },
  {
    path: 'CadastroDoador',
    component: CadastrodoadorComponentComponent
  },
  {
    path: 'CadastroNecessitado',
    component: CadastronecessitadoComponentComponent
  },
  {
    path: 'CadastroEstabelecimento',
    component: CadastroestabelecimentoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
