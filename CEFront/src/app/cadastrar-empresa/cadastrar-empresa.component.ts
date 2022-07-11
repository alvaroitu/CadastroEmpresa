import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CademService } from '../services/cadem.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: CademService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cnpj: [''],
      razaoSocial: [''],
      nomeFantasia: [''],
      apelido: [''],
      telefone: [''],
      email: [''],
      cnaeSecao: [''],
      cnaeClasse: ['']            
    });
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cadastrar(): void{
    console.log(this.formulario.value)

    this.service.create(this.formulario.value).subscribe((resposta) => {
      // alert("adicionado com sucesso!");
      this.router.navigate(['listarEmpresas'])
    });

    this.formulario.reset();

  }

  limparFormulario(): void{
    this.formulario.reset();
  }

}


