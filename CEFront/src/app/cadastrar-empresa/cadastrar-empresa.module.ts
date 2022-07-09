import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormControl, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CadastrarEmpresaComponent } from './cadastrar-empresa.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CadastrarEmpresaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,     
    FormsModule,
    MatInputModule,
    MatFormFieldModule   
  ]
})
export class CadastrarEmpresaModule { }
