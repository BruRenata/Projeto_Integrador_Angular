import { ExameService } from './../services/exame.service';
import { Exame } from './../models/exame';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames-mais-pedidos',
  templateUrl: './exames-mais-pedidos.component.html',
  styleUrls: ['./exames-mais-pedidos.component.css']
})
export class ExamesMaisPedidosComponent implements OnInit {

  exames : Exame[];
  displayedColumns = ['id', 'tipo', "descricao"];

  constructor(
    private exameService: ExameService
  ) {

    this.exames = []; exameService.getAllExames();
  }

  ngOnInit(): void {
    this.getAllExamesMaisPedidos();
  }

  public getAllExamesMaisPedidos(): void{
    this.exameService.getAllExamesMaisPedidos().subscribe(lista => {
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
