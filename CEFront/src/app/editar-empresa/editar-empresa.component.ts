import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    this.service.update(this.cademId).subscribe((resposta) => {
      this.router.navigate(['listarEmpresas'])
    })
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
