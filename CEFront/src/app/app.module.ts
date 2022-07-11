import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { CadastrarEmpresaModule } from './cadastrar-empresa/cadastrar-empresa.module';
import { HttpClientModule } from '@angular/common/http';
import { ListarEmpresasModule } from './listar-empresas/listar-empresas.module';
import { EditarEmpresaModule } from './editar-empresa/editar-empresa.module';
import { DeletarEmpresaModule } from './deletar-empresa/deletar-empresa.module';

// import { ListarEmpresasComponent } from './listar-empresas/listar-empresas.component';
// import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
// import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, 
    HeaderModule,
    HomeModule, 
    CadastrarEmpresaModule,
    ListarEmpresasModule,
    EditarEmpresaModule,
    DeletarEmpresaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
