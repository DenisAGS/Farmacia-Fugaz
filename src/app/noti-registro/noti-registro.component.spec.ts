import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiRegistroComponent } from './noti-registro.component';

describe('NotiRegistroComponent', () => {
  let component: NotiRegistroComponent;
  let fixture: ComponentFixture<NotiRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
