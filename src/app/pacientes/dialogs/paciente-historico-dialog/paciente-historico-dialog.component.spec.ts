import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHistoricoDialogComponent } from './paciente-historico-dialog.component';

describe('PacienteHistoricoDialogComponent', () => {
  let component: PacienteHistoricoDialogComponent;
  let fixture: ComponentFixture<PacienteHistoricoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteHistoricoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteHistoricoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
