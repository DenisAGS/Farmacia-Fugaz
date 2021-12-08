import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosDiariosComponent } from './ingresos-diarios.component';

describe('IngresosDiariosComponent', () => {
  let component: IngresosDiariosComponent;
  let fixture: ComponentFixture<IngresosDiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosDiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
