import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pacientes'
  },
  {
    path: 'medicos',
    loadChildren: () => import('./medicos/medicos.module').then(m => m.MedicosModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule)
  },
  {
    path: 'exames',
    loadChildren: () => import('./exames/exames.module').then(m => m.ExamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
