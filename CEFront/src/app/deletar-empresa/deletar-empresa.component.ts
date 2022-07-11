import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadem } from '../models/cadem';
import { CademService } from '../services/cadem.service';

@Component({
  selector: 'app-deletar-empresa',
  templateUrl: './deletar-empresa.component.html',
  styleUrls: ['./deletar-empresa.component.scss']
})
export class DeletarEmpresaComponent implements OnInit {

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
    private service: CademService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cademId.id = this.route.snapshot.paramMap.get("id")!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cademId.id).subscribe((resposta) => {
    this.cademId = resposta           
    })
  }

  cancel(): void{
    this.router.navigate(['listarEmpresas'])
  }

  delete(): void{
    this.service.delete(this.cademId.id).subscribe((resposta) =>{
      this.router.navigate(['listarEmpresas'])
    })
    
  }

  



}
