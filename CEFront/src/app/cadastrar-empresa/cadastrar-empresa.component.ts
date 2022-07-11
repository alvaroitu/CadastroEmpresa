import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CademService } from '../services/cadem.service';
import * as $ from 'jquery';
import { CnaeService } from '../services/cnae.service';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {

  formulario!: FormGroup;
  secaoIbge: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: CademService,
    private router: Router,
    private cnaeService: CnaeService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      apelido: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)]],
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