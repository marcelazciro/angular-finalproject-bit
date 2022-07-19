import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdopcionesComponent } from './listar-adopciones.component';

describe('ListarAdopcionesComponent', () => {
  let component: ListarAdopcionesComponent;
  let fixture: ComponentFixture<ListarAdopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAdopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
