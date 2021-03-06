import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { EditarEmpresaComponent } from './editar-empresa.component';


@NgModule({
  declarations: [
    EditarEmpresaComponent
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
    NgxMaskModule.forChild()
  ]
})
export class EditarEmpresaModule { }
