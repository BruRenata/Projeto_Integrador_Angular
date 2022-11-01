import { ExameService } from './../services/exame.service';
import { Exame } from './../models/exame';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames-menos-pedidos',
  templateUrl: './exames-menos-pedidos.component.html',
  styleUrls: ['./exames-menos-pedidos.component.css']
})
export class ExamesMenosPedidosComponent implements OnInit {

  exames : Exame[];
  displayedColumns = ['id', 'tipo', "descricao"];
  constructor(
    private exameService : ExameService
  ) {
    this.exames = [];
  }

  ngOnInit(): void {
    this.getAllExamesMenosPediso();
  }

  public getAllExamesMenosPediso(): void{
    this.exameService.getAllExamesMenosPedidos().subscribe(lista => {
      this.exames = lista;
    },
    erro => {
      console.log(erro);
    },
    () => {
      //this.appLoading.setLoading(false);
    });
  }

}
