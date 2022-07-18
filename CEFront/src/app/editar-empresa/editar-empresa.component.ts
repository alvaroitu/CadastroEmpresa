import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadem } from '../models/cadem';
import { CademService } from '../services/cadem.service';
import { CnaeService } from '../services/cnae.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit {

  formulario!: UntypedFormGroup
  secaoIbge: any[] = [];

  cnpjMask = '00.000.000/0000-00';
  telefoneMask = '(00) 0 0000-0000';

  cademId: Cadem = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    apelido: '',
    telefone: '',
    email: '',
    cnaeSecaoDescricao: ''
  }
  

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: CademService,
    private router: Router,
    private route: ActivatedRoute,
    private cnaeService: CnaeService


  ) { }

  ngOnInit(): void {
    this.cademId.id = this.route.snapshot.paramMap.get("id")!
    this.findById();

    this.formulario = this.formBuilder.group({
      cnpj: ['', [Validators.required, Validators.pattern(/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/)]],
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      apelido: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/\([1-9]{2}\) [1-9]{1} [0-9]{4}\-[0-9]{4}$/)]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],      
      cnaeSecaoDescricao: ['']      
    });

    this.getSecaoFromIbge();
  }

  cancel(): void{
    this.router.navigate(['listarEmpresas'])
  }

  findById(): void {
    this.service.findById(this.cademId.id).subscribe((resposta) => {
      this.cademId = resposta     
    })
  }

  update(): void{
    
    if(this.formulario.valid){
      this.service.update(this.cademId).subscribe((resposta) => {
        this.router.navigate(['listarEmpresas'])
      })
    } else{
      console.log("formulario invalido")
    }
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
