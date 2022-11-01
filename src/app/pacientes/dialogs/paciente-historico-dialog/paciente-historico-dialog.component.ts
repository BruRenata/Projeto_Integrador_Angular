import { Paciente } from './../../models/paciente';
import { PacienteService } from './../../services/paciente.service';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-paciente-historico-dialog',
  templateUrl: './paciente-historico-dialog.component.html',
  styleUrls: ['./paciente-historico-dialog.component.css']
})
export class PacienteHistoricoDialogComponent implements OnInit {

  historico: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: Number},
    private pacienteService: PacienteService
    ) {
      this.historico = "" + data.id;
     }

  ngOnInit(): void {
    this.getHistoricoPaciente();
  }

  getHistoricoPaciente(){
    this.pacienteService.getHistoricoPaciente(this.data.id).subscribe(paciente => {
      this.historico = paciente.historico;
    },
    erro => {
      console.log(erro);
    },
    () => {
      //this.appLoading.setLoading(false);
    });
  }

}
