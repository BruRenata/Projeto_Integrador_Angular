import { Paciente } from './../models/paciente';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PacienteCadastroDialogComponent } from '../dialogs/paciente-cadastro-dialog/paciente-cadastro-dialog.component';
import { PacienteHistoricoDialogComponent } from '../dialogs/paciente-historico-dialog/paciente-historico-dialog.component';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes : Paciente[];
  displayedColumns = ['id', 'nome', "cpf", "historico", 'iconDelete'];

  constructor(
    private pacienteService: PacienteService,
    public dialog: MatDialog
  ) {
     this.pacientes = [];
  }

  ngOnInit(): void {
    this.getAllPacientes();
  }

  public getAllPacientes(): void{
    this.pacienteService.getAllPacientes().subscribe(lista => {
      this.pacientes = lista;
    },
    erro => {
      console.log(erro);
    },
    () => {
      //this.appLoading.setLoading(false);
    });
  }

  pacienteDelete(id:Number){
    this.pacienteService.deletePaciente(id).subscribe(() =>{

    },
    () => {
      //this.onError("Erro ao deletar produto" + id);
    },
    () =>{
      this.getAllPacientes();
    });
  }

  openDialogCadastroPaciente(){
    this.dialog.open(PacienteCadastroDialogComponent,{
    });
  }

  openDialogHistoricoPaciente(id:any){
    this.dialog.open(PacienteHistoricoDialogComponent,{
      data: {id: id}
    });
  }

}
