import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCadastroDialogComponent } from './medico-cadastro-dialog.component';

describe('MedicoCadastroDialogComponent', () => {
  let component: MedicoCadastroDialogComponent;
  let fixture: ComponentFixture<MedicoCadastroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCadastroDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoCadastroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
