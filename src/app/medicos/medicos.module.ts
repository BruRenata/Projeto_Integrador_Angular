import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicoCadastroDialogComponent } from './dialogs/medico-cadastro-dialog/medico-cadastro-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MedicosComponent,
    MedicoCadastroDialogComponent
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
    MedicosRoutingModule,
    FormsModule
  ]
})
export class MedicosModule { }
