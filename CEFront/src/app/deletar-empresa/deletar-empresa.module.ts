import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeletarEmpresaComponent } from './deletar-empresa.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DeletarEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class DeletarEmpresaModule { }
