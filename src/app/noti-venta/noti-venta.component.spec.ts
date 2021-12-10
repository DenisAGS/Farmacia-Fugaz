import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiVentaComponent } from './noti-venta.component';

describe('NotiVentaComponent', () => {
  let component: NotiVentaComponent;
  let fixture: ComponentFixture<NotiVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
