import { compileInjectable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CademService } from '../services/cadem.service';
import { CnaeService } from '../services/cnae.service';


@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {

  formulario!: UntypedFormGroup;
  secaoIbge: any[] = [];

  cnpjMask = '00.000.000/0000-00';
  telefoneMask = '(00) 0 0000-0000';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: CademService,
    private router: Router,
    private cnaeService: CnaeService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      apelido: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],      
      cnaeSecaoDescricao: ['']      
    });

    this.getSecaoFromIbge();
  } 

  cadastrar(): void{
    if(this.formulario.valid){
      this.service.create(this.formulario.value).subscribe((resposta) => {        
        this.router.navigate(['listarEmpresas'])
      });  
      this.formulario.reset();
    } else{
      console.log("formulario invalido")
    }
  }

  limparFormulario(): void{
    this.formulario.reset();
  }
  
  getSecaoFromIbge(): void{
    this.cnaeService.getSecao().subscribe(
      (data: any) =>{
        for (var item in data){
          this.secaoIbge.push([data[item].descricao])
        }        
      },
      err => console.error(err),
      () => console.log('erro carregar secao')
    )    
  }
}