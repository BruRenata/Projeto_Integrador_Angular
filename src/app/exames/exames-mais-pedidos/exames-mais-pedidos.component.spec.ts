import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesMaisPedidosComponent } from './exames-mais-pedidos.component';

describe('ExamesMaisPedidosComponent', () => {
  let component: ExamesMaisPedidosComponent;
  let fixture: ComponentFixture<ExamesMaisPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamesMaisPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesMaisPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
