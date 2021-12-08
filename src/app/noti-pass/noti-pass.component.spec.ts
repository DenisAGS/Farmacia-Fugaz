import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiPassComponent } from './noti-pass.component';

describe('NotiPassComponent', () => {
  let component: NotiPassComponent;
  let fixture: ComponentFixture<NotiPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
