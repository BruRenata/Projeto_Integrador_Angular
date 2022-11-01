import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCadastroDialogComponent } from './paciente-cadastro-dialog.component';

describe('PacienteCadastroDialogComponent', () => {
  let component: PacienteCadastroDialogComponent;
  let fixture: ComponentFixture<PacienteCadastroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCadastroDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteCadastroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
