import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesMenosPedidosComponent } from './exames-menos-pedidos.component';

describe('ExamesMenosPedidosComponent', () => {
  let component: ExamesMenosPedidosComponent;
  let fixture: ComponentFixture<ExamesMenosPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamesMenosPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesMenosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
