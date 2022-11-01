import { MedicoCadastroDialogComponent } from './../dialogs/medico-cadastro-dialog/medico-cadastro-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Medico } from './../models/medico';
import { MedicoService } from './../services/medicos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos : Medico[];
  displayedColumns = ['id', 'nome', 'especialidade', "cpf", "crm", 'iconDelete'];

  constructor(
    private medicoService: MedicoService,
    public dialog: MatDialog
  ) {
    this.medicos = [];
   }

  ngOnInit(): void {
    this.getAllMedicos();
  }

  public getAllMedicos(): void{
    this.medicoService.getAllMedicos().subscribe(lista => {
      this.medicos = lista;
    },
    erro => {
      console.log(erro);
    },
    () => {
      //this.appLoading.setLoading(false);
    });
  }

  MedicoDelete(id: number){
    this.medicoService.deleteMedico(id).subscribe(() =>{

    },
    () => {
      //this.onError("Erro ao deletar produto" + id);
    },
    () =>{
      this.getAllMedicos();
    });
  }

  openDialogCadastroMedico(){
    this.dialog.open(MedicoCadastroDialogComponent,{
    });
  }
}
