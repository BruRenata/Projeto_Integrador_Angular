import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { FormsModule } from '@angular/forms';
import { PacienteCadastroDialogComponent } from './dialogs/paciente-cadastro-dialog/paciente-cadastro-dialog.component';
import { PacienteHistoricoDialogComponent } from './dialogs/paciente-historico-dialog/paciente-historico-dialog.component';



@NgModule({
  declarations: [
    PacientesComponent,
    PacienteCadastroDialogComponent,
    PacienteHistoricoDialogComponent,  
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    PacientesRoutingModule,
    FormsModule
  ]
})
export class PacientesModule { }
