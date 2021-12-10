import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiIngresoComponent } from './noti-ingreso.component';

describe('NotiIngresoComponent', () => {
  let component: NotiIngresoComponent;
  let fixture: ComponentFixture<NotiIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
