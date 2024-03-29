import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrodoadorComponentComponent } from './Componentes/cadastrodoador-component/cadastrodoador-component.component';
import { CadastroestabelecimentoComponentComponent } from './Componentes/cadastroestabelecimento-component/cadastroestabelecimento-component.component';
import { CadastronecessitadoComponentComponent } from './Componentes/cadastronecessitado-component/cadastronecessitado-component.component';
import { ContatosComponent } from './Componentes/contatos-component/contatos-component.component';
import { DoacaoComponentComponent } from './Componentes/doacao-component/doacao-component.component';
import { ListaestabelecimentosComponentComponent } from './Componentes/listaestabelecimentos-component/listaestabelecimentos-component.component';
import { ListanecessitadosComponentComponent } from './Componentes/listanecessitados-component/listanecessitados-component.component';
import { ListaparticipantesComponentComponent } from './Componentes/listaparticipantes-component/listaparticipantes-component.component';
import { LoginComponentComponent } from './Componentes/login-component/login-component.component';
import { PorquedoarComponent } from './Componentes/porquedoar-component/porquedoar.component';
import { QuemsomosComponent } from './Componentes/quemsomos-component/quemsomos.component';
import { TabComponentComponent } from './Componentes/tab-component/tab-component.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponentComponent
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
  }, {
    path: 'Colaboradores',
    component: ListaparticipantesComponentComponent
  }
  , {
    path: 'Estabelecimentos',
    component: ListaestabelecimentosComponentComponent
  }
  , {
    path: 'Necessitados',
    component: ListanecessitadosComponentComponent
  },{
    path: 'DoeAgora',
    component: DoacaoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
