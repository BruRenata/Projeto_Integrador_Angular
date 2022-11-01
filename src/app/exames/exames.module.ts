import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamesMenosPedidosComponent } from './exames-menos-pedidos/exames-menos-pedidos.component';
import { ExamesMaisPedidosComponent } from './exames-mais-pedidos/exames-mais-pedidos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'maisPedidos', component: ExamesMaisPedidosComponent },
  { path: 'menosPedidos', component: ExamesMenosPedidosComponent }
];

@NgModule({
  declarations: [
    MenuComponent,
    ExamesMenosPedidosComponent,
    ExamesMaisPedidosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [RouterModule]
})
export class ExamesModule { }
