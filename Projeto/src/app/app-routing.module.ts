import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrodoadorComponentComponent } from './cadastrodoador-component/cadastrodoador-component.component';
import { CadastroestabelecimentoComponentComponent } from './cadastroestabelecimento-component/cadastroestabelecimento-component.component';
import { CadastronecessitadoComponentComponent } from './cadastronecessitado-component/cadastronecessitado-component.component';
import { ContatosComponent } from './contatos-component/contatos-component.component';
import { PorquedoarComponent } from './porquedoar-component/porquedoar.component';
import { QuemsomosComponent } from './quemsomos-component/quemsomos.component';

const routes: Routes = [
  {
    path: '',
    component: QuemsomosComponent
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
