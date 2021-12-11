import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiRolComponent } from './noti-rol.component';

describe('NotiRolComponent', () => {
  let component: NotiRolComponent;
  let fixture: ComponentFixture<NotiRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
