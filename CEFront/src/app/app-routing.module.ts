import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { HomeComponent } from './home/home.component';
import { ListarEmpresasComponent } from './listar-empresas/listar-empresas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastrarEmpresa', component: CadastrarEmpresaComponent},
  { path: 'listarEmpresas', component: ListarEmpresasComponent },
  { path: 'editarEmpresa', component: EditarEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
