import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      apelido: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
    console.log(this.formulario)

    if(this.formulario.valid){
      this.service.create(this.formulario.value).subscribe((resposta) => {
        // alert("adicionado com sucesso!");
        this.router.navigate(['listarEmpresas'])
      });
  
      this.formulario.reset();

    } else{
      console.log("INVALIDO")
    }
  }

  limparFormulario(): void{
    this.formulario.reset();
  }  

}


