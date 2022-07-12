import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { TextMaskModule } from 'angular2-text-mask';


import { CadastrarEmpresaComponent } from './cadastrar-empresa.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    CadastrarEmpresaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,     
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonModule,
    TextMaskModule,
    NgxMaskModule.forChild()
  ]
})
export class CadastrarEmpresaModule { }
