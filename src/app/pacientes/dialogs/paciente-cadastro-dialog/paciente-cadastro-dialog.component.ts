import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-cadastro-dialog',
  templateUrl: './paciente-cadastro-dialog.component.html',
  styleUrls: ['./paciente-cadastro-dialog.component.css']
})
export class PacienteCadastroDialogComponent implements OnInit {

  nome: string;
  cpf: string;
  
  constructor(
    private pacienteService: PacienteService
    ) {
    this.nome = "";
    this.cpf = "";
   }

  ngOnInit(): void {
  }

  criarPaciente(){
    alert(this.nome);
    let paciente: Paciente = {
      nome: this.nome,
      cpf: this.cpf
    };
    this.pacienteService.criarPaciente(paciente).subscribe();
  }
}
