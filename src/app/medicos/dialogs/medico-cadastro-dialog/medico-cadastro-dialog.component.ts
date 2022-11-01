import { Component, OnInit } from '@angular/core';
import { MedicoService } from './../../services/medicos.service';
import { Medico } from './../../models/medico';

@Component({
  selector: 'app-medico-cadastro-dialog',
  templateUrl: './medico-cadastro-dialog.component.html',
  styleUrls: ['./medico-cadastro-dialog.component.css']
})
export class MedicoCadastroDialogComponent implements OnInit {

  nome: string;
  especialidade: string;
  cpf: string;
  crm: string;
  constructor(
    private medicoService: MedicoService
  ) {
    this.nome = "";
    this.especialidade = "";
    this.cpf = "";
    this.crm = "";
   }

  ngOnInit(): void {
  }

  criarMedico(){
    alert(this.nome);
    let medico: Medico = {
      nome: this.nome,
      especialidade: this.especialidade,
      cpf: this.cpf,
      crm: this.crm
    };
    this.medicoService.criarMedico(medico).subscribe();
  }

}
