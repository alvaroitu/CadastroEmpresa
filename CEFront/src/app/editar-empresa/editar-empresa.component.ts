import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadem } from '../models/cadem';
import { CademService } from '../services/cadem.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit {

  formulario!: FormGroup

  cademId: Cadem = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    apelido: '',
    telefone: '',
    email: '',
    cnaeSecao: '',
    cnaeClasse: ''            

  }
  

  constructor(
    private formBuilder: FormBuilder,
    private service: CademService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.cademId.id = this.route.snapshot.paramMap.get("id")!
    this.findById();

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
      console.log("INVALIDO")
    }

  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
