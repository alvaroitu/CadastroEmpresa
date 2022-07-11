import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cadem } from '../models/cadem';
import { CademService } from '../services/cadem.service';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.scss']
})
export class ListarEmpresasComponent implements OnInit {

  displayedColumns: any[] = ['id','cnpj','razaoSocial','nomeFantasia','apelido','telefone','email', 'cnaeSecaoDescricao', 'acao'];
  dataSource: MatTableDataSource<Cadem>;

  iceunsp: Cadem[] = [];

  constructor(
    private service: CademService
    ) {
      this.dataSource = new MatTableDataSource();
     }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) =>{
    this.dataSource.data = resposta;      
    })
  }

}
