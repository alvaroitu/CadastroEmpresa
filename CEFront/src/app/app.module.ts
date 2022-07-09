import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { ListarEmpresasComponent } from './listar-empresas/listar-empresas.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarEmpresaModule } from './cadastrar-empresa/cadastrar-empresa.module';

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
    CadastrarEmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
