import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdopcionComponent } from './crear-adopcion.component';

describe('CrearAdopcionComponent', () => {
  let component: CrearAdopcionComponent;
  let fixture: ComponentFixture<CrearAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAdopcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
