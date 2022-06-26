import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrodoadorComponentComponent } from './Componentes/cadastrodoador-component/cadastrodoador-component.component';
import { CadastroestabelecimentoComponentComponent } from './Componentes/cadastroestabelecimento-component/cadastroestabelecimento-component.component';
import { CadastronecessitadoComponentComponent } from './Componentes/cadastronecessitado-component/cadastronecessitado-component.component';
import { ContatosComponent } from './Componentes/contatos-component/contatos-component.component';
import { ListaestabelecimentosComponentComponent } from './Componentes/listaestabelecimentos-component/listaestabelecimentos-component.component';
import { ListanecessitadosComponentComponent } from './Componentes/listanecessitados-component/listanecessitados-component.component';
import { ListaparticipantesComponentComponent } from './Componentes/listaparticipantes-component/listaparticipantes-component.component';
import { LoginComponentComponent } from './Componentes/login-component/login-component.component';
import { PorquedoarComponent } from './Componentes/porquedoar-component/porquedoar.component';
import { QuemsomosComponent } from './Componentes/quemsomos-component/quemsomos.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponentComponent,
  }, {
    path: 'Colaboradores',
    component: ListaparticipantesComponentComponent,
    outlet: "outlet2"
  }, {
    path: 'Estabelecimentos',
    component: ListaestabelecimentosComponentComponent,
    outlet: "outlet2"
  }, {
    path: 'Necessitados',
    component: ListanecessitadosComponentComponent,
    outlet: "outlet2"
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
